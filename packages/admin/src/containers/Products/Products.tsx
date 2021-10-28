import React, { useState } from 'react';
import { styled, withStyle } from 'baseui';
import Button from 'components/Button/Button';
import { Grid, Row as Rows, Col as Column } from 'components/FlexBox/FlexBox';
import Input from 'components/Input/Input';
import Select from 'components/Select/Select';
import { isArray, sortBy } from "lodash";

import useQuery from "../../hooks/useQuery";
import * as query from "../../graphql/queries";

import { Header, Heading } from 'components/Wrapper.style';
import Fade from 'react-reveal/Fade';
import ProductCard from 'components/ProductCard/ProductCard';
import NoResult from 'components/NoResult/NoResult';
import { CURRENCY } from 'settings/constants';
import Placeholder from 'components/Placeholder/Placeholder';

export const ProductsRow = styled('div', ({ $theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  marginTop: '25px',
  backgroundColor: $theme.colors.backgroundF7,
  position: 'relative',
  zIndex: '1',

  '@media only screen and (max-width: 767px)': {
    marginLeft: '-7.5px',
    marginRight: '-7.5px',
    marginTop: '15px',
  },
}));

export const Col = withStyle(Column, () => ({
  '@media only screen and (max-width: 767px)': {
    marginBottom: '20px',

    ':last-child': {
      marginBottom: 0,
    },
  },
}));

const Row = withStyle(Rows, () => ({
  '@media only screen and (min-width: 768px) and (max-width: 991px)': {
    alignItems: 'center',
  },
}));

export const ProductCardWrapper = styled('div', () => ({
  height: '100%',
}));

export const LoaderWrapper = styled('div', () => ({
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexWrap: 'wrap',
}));

export const LoaderItem = styled('div', () => ({
  width: '25%',
  padding: '0 15px',
  marginBottom: '30px',
}));

const typeSelectOptions = [
  { value: 'grocery', label: 'Grocery' },
  { value: 'women-cloths', label: 'Women Cloths' },
  { value: 'bags', label: 'Bags' },
  { value: 'makeup', label: 'Makeup' },
];
const priceSelectOptions = [
  { value: 'highestToLowest', label: 'Highest To Lowest' },
  { value: 'lowestToHighest', label: 'Lowest To Highest' },
];

export default function Products() {
  //const { data, error, refetch, fetchMore } = useQuery(GET_PRODUCTS);
  const { handleQuery, loadingMore, loadMore } = useQuery(query.listPicks);
  const [loading, setLoading] = React.useState(true);
  const [lastToken, setLastToken] = React.useState();
  const [picks, setPicks] = React.useState([]);

  //const [loadingMore, toggleLoading] = useState(false);
  const [type, setType] = useState([]);
  const [priceOrder, setPriceOrder] = useState([]);
  const [search, setSearch] = useState([]);
  const [params, setParams] = useState({
    sortDirection: "DESC",
    limit: 50,
    //filter: !_isEmpty(actualFilter) ? actualFilter : null,
  })



  React.useEffect(() => {
    let mounted = true;
    setLoading(true)
    const fetchData = async () => {
      try {
        const { listPicks: queryResp } = await handleQuery(params);

        console.log("listPicks response", queryResp);
        const { items, nextToken } = queryResp || {};
        if (mounted) {
          setPicks(items || []);
          setLastToken(nextToken);
        }
      } catch (error) {
        console.log("listPicks error", error);
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };
    fetchData();

    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);


  const handleLoadMore = async () => {
    const {
      listPicks: { items, nextToken },
    } = await loadMore({ lastToken, ...params }) as any;
    setPicks((prev) => [...prev, ...items]);
    setLastToken(nextToken);
  };

  const renderData = (values) => {
    return sortBy(Object.keys(values || {})).map((x) => {
      return (
        <li key={x} className="ml-4">
          {!values[x] || typeof values[x] !== "object" ? (
            `${x}: ${values[x]}`
          ) : isArray(values[x]) ? (
            `${x}: ${JSON.stringify(values[x])}`
          ) : (
            <ul>
              <li>{x}</li>
              {renderData(values[x])}
            </ul>
          )}
        </li>
      );
    });
  };


  return (
    <Grid fluid={true}>
      <Row>
        <Col md={12}>
          <Header style={{ marginBottom: 15 }}>
            <Col md={2} xs={12}>
              <Heading>Picks</Heading>
            </Col>

            {/* <Col md={10} xs={12}>
              <Row>
                <Col md={3} xs={12}>
                  <Select
                    options={typeSelectOptions}
                    labelKey="label"
                    valueKey="value"
                    placeholder="Category Type"
                    value={type}
                    searchable={false}
                    onChange={handleCategoryType}
                  />
                </Col>

                <Col md={3} xs={12}>
                  <Select
                    options={priceSelectOptions}
                    labelKey="label"
                    valueKey="value"
                    value={priceOrder}
                    placeholder="Price"
                    searchable={false}
                    onChange={handlePriceSort}
                  />
                </Col>

                <Col md={6} xs={12}>
                  <Input
                    value={search}
                    placeholder="Ex: Search By Name"
                    onChange={handleSearch}
                    clearable
                  />
                </Col>
              </Row>
            </Col> */}
          </Header>

          <Row>
            {picks ? (
              picks && picks.length !== 0 ? (
                picks.map((item: any, index: number) => (
                  <Col
                    md={4}
                    lg={3}
                    sm={6}
                    xs={12}
                    key={index}
                    style={{ margin: '15px 0' }}
                  >
                    <Fade bottom duration={800} delay={index * 10}>
                      <ProductCard
                        title={item.mercadoBook}
                        weight={item.liga}
                        image={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Sport_balls.svg/1200px-Sport_balls.svg.png"}
                        currency={CURRENCY}
                        price={item.unidades}
                        salePrice={item.unidades}
                        discountInPercent={item.mercado}
                        data={item}
                      />
                    </Fade>
                  </Col>
                ))
              ) : (
                <NoResult />
              )
            ) : (
              <LoaderWrapper>
                <LoaderItem>
                  <Placeholder />
                </LoaderItem>
                <LoaderItem>
                  <Placeholder />
                </LoaderItem>
                <LoaderItem>
                  <Placeholder />
                </LoaderItem>
                <LoaderItem>
                  <Placeholder />
                </LoaderItem>
              </LoaderWrapper>
            )}
          </Row>
          {picks && lastToken && (
            <Row>
              <Col
                md={12}
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                <Button onClick={handleLoadMore} isLoading={loadingMore}>
                  Cargar más
                </Button>
              </Col>
            </Row>
          )}
        </Col>
      </Row>
    </Grid>
  );
}
