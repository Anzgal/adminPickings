import React, { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { useMutation, gql } from '@apollo/client';
import { Scrollbars } from 'react-custom-scrollbars';
import { useDrawerDispatch } from 'context/DrawerContext';
import Button, { KIND } from 'components/Button/Button';
import DrawerBox from 'components/DrawerBox/DrawerBox';
import { Row, Col } from 'components/FlexBox/FlexBox';
import { Textarea } from 'components/Textarea/Textarea';
import Select from 'components/Select/Select';
import { FormFields, FormLabel } from 'components/FormFields/FormFields';
import { API } from "aws-amplify";
import axios from 'axios';
import Checkbox from 'components/CheckBox/CheckBox';
import Input from 'components/Input/Input';



import * as query from "../../graphql/queries";
import * as mutation from "../../graphql/mutations";

import {
  Form,
  DrawerTitleWrapper,
  DrawerTitle,
  FieldDetails,
  ButtonGroup,
} from '../DrawerItems/DrawerItems.style';


const GET_PRODUCTS = gql`
  query getProducts(
    $type: String
    $sortByPrice: String
    $searchText: String
    $offset: Int
  ) {
    products(
      type: $type
      sortByPrice: $sortByPrice
      searchText: $searchTextnhju7
      offset: $offset
    ) {
      items {
        id
        name
        image
        type
        price
        unit
        salePrice
        discountInPercent
      }
      totalCount
      hasMore
    }
  }
`;
const CREATE_PRODUCT = gql`
  mutation createProduct($product: AddProductInput!) {
    createProduct(product: $product) {
      id
      name
      image
      slug
      type
      price
      unit
      description
      salePrice
      discountInPercent
      # per_unit
      quantity
      # creation_date
    }
  }
`;
type Props = any;

const DecimalToAmerican = (odd) => {
  if (Number(odd) >= 2) {
    return Math.round((Number(odd) - 1) * 100)
  } else {
    return Math.round((-100) / (Number(odd) - 1))
  }
}

const AddProduct: React.FC<Props> = (props) => {
  const dispatch = useDrawerDispatch();
  const closeDrawer = useCallback(() => dispatch({ type: 'CLOSE_DRAWER' }), [
    dispatch,
  ]);

  const { register, handleSubmit, setValue } = useForm({defaultValues: {"esFreePick": false, "deporte": "", "liga": "", "evento": "", "mercado": "", "mercadoBook": "", "description": ""}});

  const [deporte, setDeporte] = useState([]);
  const [liga, setLiga] = useState([]);
  const [evento, setEvento] = useState([]);
  const [mercado, setMercado] = useState([]);
  const [mercadoBook, setMercadoBook] = useState([]);
  const [esFreePick, setEsFreePick] = useState(false);
  const [description, setDescription] = useState('');


  const [sports, setSports] = useState([]);
  const [leagues, setLeagues] = useState([]);
  const [events, setEvents] = useState([]);
  const [markets, setMarkets] = useState([]);
  const [marketBook, setMarketBook] = useState([]);


  const [loadingSports, setLoadingSports] = useState(false);
  const [loadingLeagues, setLoadingLeagues] = useState(false);
  const [loadingEvents, setLoadingEvents] = useState(false);
  const [loadingMarkets, setLoadingMarkets] = useState(false);
  const [loadingMarketBook, setLoadingMarketBook] = useState(false);

  const createPick = async (input) => {
    try {
      const { data } = await API.graphql({
        query: mutation.createPick,
        variables: { ...input },
      }) as any;
      const { createPick: pickCreated } = data || {};
      console.log("createick Response", pickCreated);
      return pickCreated;
    } catch (error) {
      console.log("createPick error", error);
      return { error: true, ...error };
    }
  };



  //Sports fetch
  React.useEffect(() => {
    const fetch = async () => {
      try {
        setLoadingSports(true);
        const {
          data: { listSports },
        } = await API.graphql({
          query: query.listSports,
        }) as any;

        const { items } = listSports || {};
        console.log("ITEMS:", items);

        items.map((x) => {
          setSports(prev => [...prev, { value: x.id, name: x.title, id: x.id }])
        })


      } catch (error) {
        console.log("listSports error", error);
      } finally {
        setLoadingSports(false);
      }
    };


    fetch();

  }, []);

  //Leagues Fetch
  React.useEffect(() => {

    setLiga([]);

    setLeagues([])

    const fetch = async () => {
      try {
        setLoadingLeagues(true);
        console.log("DEPORTE", deporte);

        const {
          data: { listLeagues },
        } = await API.graphql({
          query: query.listLeagues,
          variables: {
            filter: {
              sport: { eq: deporte[0]?.value }
            }
          }
        }) as any;


        const { items } = listLeagues || {};
        console.log("LEAGUES:", items);

        items.map((x) => {
          setLeagues(prev => [...prev, { value: x.id, name: x.title, id: x.id }])
        })

      } catch (error) {
        console.log("listLeagues error", error);
      } finally {
        setLoadingLeagues(false);
      }
    };

    if (deporte[0]) {
      fetch();
    } else {
      setLiga([]);
    }

  }, [deporte]);

  //Events Fetch
  React.useEffect(() => {

    setEvento([]);
    setEvents([])

    const fetch = async () => {
      try {
        setLoadingEvents(true);
        console.log("Liga", liga);

        await axios.post(`http://localhost:3005/api/events`, { "sport": deporte[0], "league": liga[0] })
          .then(res => {
            console.log("response", res.data.RESPONSE);
            
            res.data.RESPONSE.map((x) => {
              //console.log(x.event.name);
              setEvents(prev => [...prev, { value: x.event.id, name: x.event.name, id: x.event.id }])
            })
          }).catch(err => console.log("ERROR", err))

      } catch (error) {
        console.log("listEvents error", error);
      } finally {
        //console.log("EVENTS", events);

        setLoadingEvents(false);
      }
    };

    if (liga[0]) {
      fetch();
    } else {
      setEvento([]);
    }

  }, [liga]);

  //Markets Fetch
  React.useEffect(() => {

    setMercado([]);

    setMarkets([])

    const fetch = async () => {
      try {
        setLoadingMarkets(true);

        await axios.post(`http://localhost:3005/api/markets`, { "sport": deporte[0], "league": liga[0], "event": evento[0] })
          .then(res => {
            console.log("response", res.data.RESPONSE);

            res.data.RESPONSE.map((x) => {
              //console.log(x);

              setMarkets(prev => [...prev, { value: x.marketId, name: x.marketName, id: x.marketId }])
            })
          }).catch(err => console.log("ERROR", err))

      } catch (error) {
        console.log("listMarkets error", error);
      } finally {
        //console.log("Markets:", markets);

        setLoadingMarkets(false);
      }
    };

    if (evento[0]) {
      fetch();
    } else {
      setMercado([]);
    }

  }, [evento]);


  //MarketBook Fetch
  React.useEffect(() => {

    setMercadoBook([]);
    setMarketBook([])

    const fetch = async () => {
      //console.log("Entered Marketbook fetch", markets);
      try {
        setLoadingMarketBook(true);
        var bla = [];

        await axios.post(`http://localhost:3005/api/runnersNames`, { "sport": deporte[0], "league": liga[0], "event": evento[0], "market": mercado[0] })
          .then(res => {
            console.log("response runnersNames", res.data.RESPONSE);

            /*  res.data.RESPONSE[0].runners.map((x) => {
               console.log("RUNNERNAME", x);
               setRunnernames(prev => [...prev, { selectionID: x.selectionId, runnerName: x.runnerName, handicap: x.handicap, sortPriority: x.sortPriority }])
             }) */

            bla = res.data.RESPONSE[0].runners

          }).catch(err => console.log("ERROR", err))

        await axios.post(`http://localhost:3005/api/marketbook`, { "sport": deporte[0], "league": liga[0], "event": evento[0], "market": mercado[0] })
          .then(res => {
            console.log("response marketbook", res.data.RESPONSE);

            res.data.RESPONSE[0].runners.map((x, index) => {
              //console.log(x);
              if (x.ex?.availableToBack[0]?.price) {
                setMarketBook(prev => [...prev, { value: `${x.selectionId}-${bla[index].runnerName} ${x.handicap ? x.handicap : ""}-(${DecimalToAmerican(x.ex?.availableToBack[0]?.price)})`, name: `${bla[index].runnerName} ${x.handicap ? x.handicap : ""} (${DecimalToAmerican(x.ex?.availableToBack[0]?.price)})`, id: x.selectionId }])
              }
            })
          }).catch(err => console.log("ERROR", err))

      } catch (error) {
        console.log("listMarketBook error", error);
      } finally {
        //console.log("EVENTS", events);

        setLoadingMarketBook(false);
      }
    };

    if (mercado[0]) {
      fetch();
    } else {
      setMercadoBook([]);
    }

  }, [mercado]);

  React.useEffect(() => {
    register({ name: 'deporte', required: true });
    register({ name: 'liga', required: true });
    register({ name: 'evento', required: true });
    register({ name: 'mercado', required: true });
    register({ name: 'mercadoBook', required: true });
    register({ name: 'description', required: true });
    register({ name: 'esFreePick'});
  }, [register]);

  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    setValue('description', value);
    setDescription(value);
  };

  const [createProduct] = useMutation(CREATE_PRODUCT, {
    update(cache, { data: { createProduct } }) {
      const { products } = cache.readQuery({
        query: GET_PRODUCTS,
      });

      cache.writeQuery({
        query: GET_PRODUCTS,
        data: {
          products: {
            __typename: products.__typename,
            items: [createProduct, ...products.items],
            hasMore: true,
            totalCount: products.items.length + 1,
          },
        },
      });
    },
  });

  const handleDeporteChange = ({ value }) => {
    setValue('deporte', value);
    setDeporte(value);
  };
  const handleLigaChange = ({ value }) => {
    setValue('liga', value);
    setLiga(value);
  };
  const handleEventoChange = ({ value }) => {
    setValue('evento', value);
    setEvento(value);
  };

  const handleMercadoChange = ({ value }) => {
    setValue('mercado', value);
    setMercado(value);
  };
  const handleMercadobookChange = ({ value }) => {
    setValue('mercadoBook', value);
    setMercadoBook(value);
  };
  const handleisFreePickChange = () => {
    setValue('esFreePick', !esFreePick);
    setEsFreePick(!esFreePick);
  };
  const onSubmit = (data) => {
    
    const newProduct = {
      deporte: data.deporte ? data.deporte[0]?.value : undefined,
      liga: data.liga ? data.liga[0]?.value : undefined,
      evento: data.evento ? data.evento[0]?.value : undefined,
      mercado: data.mercado ? data.mercado[0]?.value : undefined,
      mercadoBook: data.mercadoBook ? data.mercadoBook[0]?.value : undefined,
      esFreePick: data.esFreePick,
      description: data.description,
      unidades: data.unidades,
    };
    console.log(newProduct, 'newProduct data');
    /* createProduct({
      variables: { product: newProduct },
    }); */
    createPick({input: newProduct})
    closeDrawer();
  };

  return (
    <>
      <DrawerTitleWrapper>
        <DrawerTitle>Agregar Pick</DrawerTitle>
      </DrawerTitleWrapper>

      <Form onSubmit={handleSubmit(onSubmit)} style={{ height: '100%' }}>
        <Scrollbars
          autoHide
          renderView={(props) => (
            <div {...props} style={{ ...props.style, overflowX: 'hidden' }} />
          )}
          renderTrackHorizontal={(props) => (
            <div
              {...props}
              style={{ display: 'none' }}
              className="track-horizontal"
            />
          )}
        >
          {/* <Row>
            <Col lg={4}>
              <FieldDetails>Upload your Product image here</FieldDetails>
            </Col>
            <Col lg={8}>
              <DrawerBox
                overrides={{
                  Block: {
                    style: {
                      width: '100%',
                      height: 'auto',
                      padding: '30px',
                      borderRadius: '3px',
                      backgroundColor: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    },
                  },
                }}
              >
                <Uploader onChange={handleUploader} />
              </DrawerBox>
            </Col>
          </Row> */}

          <Row>
            <Col lg={4}>
              <FieldDetails>
                Escoge el deporte de tu selección
              </FieldDetails>
            </Col>

            <Col lg={8}>
              <DrawerBox>
                <FormFields>
                  <FormLabel>Deporte</FormLabel>
                  <Select
                    options={sports}
                    labelKey="name"
                    valueKey="value"
                    isLoading={loadingSports}
                    disabled={loadingSports}
                    placeholder="Escoge el deporte"
                    value={deporte}
                    searchable={false}
                    onChange={handleDeporteChange}
                    overrides={{
                      Placeholder: {
                        style: ({ $theme }) => {
                          return {
                            ...$theme.typography.fontBold14,
                            color: $theme.colors.textNormal,
                          };
                        },
                      },
                      DropdownListItem: {
                        style: ({ $theme }) => {
                          return {
                            ...$theme.typography.fontBold14,
                            color: $theme.colors.textNormal,
                          };
                        },
                      },
                      OptionContent: {
                        style: ({ $theme, $selected }) => {
                          return {
                            ...$theme.typography.fontBold14,
                            color: $selected
                              ? $theme.colors.textDark
                              : $theme.colors.textNormal,
                          };
                        },
                      },
                      SingleValue: {
                        style: ({ $theme }) => {
                          return {
                            ...$theme.typography.fontBold14,
                            color: $theme.colors.textNormal,
                          };
                        },
                      },
                      Popover: {
                        props: {
                          overrides: {
                            Body: {
                              style: { zIndex: 5 },
                            },
                          },
                        },
                      },
                    }}
                  />
                </FormFields>
              </DrawerBox>
            </Col>
          </Row>


          <Row>
            <Col lg={4}>
              <FieldDetails>
                Escoge la liga o torneo de tu selección
              </FieldDetails>
            </Col>

            <Col lg={8}>
              <DrawerBox>
                <FormFields>
                  <FormLabel>Liga</FormLabel>
                  <Select
                    options={leagues}
                    labelKey="name"
                    valueKey="value"
                    isLoading={loadingLeagues}
                    disabled={deporte ? false : true}
                    placeholder="Escoge la liga"
                    value={liga}
                    searchable={false}
                    onChange={handleLigaChange}
                    overrides={{
                      Placeholder: {
                        style: ({ $theme }) => {
                          return {
                            ...$theme.typography.fontBold14,
                            color: $theme.colors.textNormal,
                          };
                        },
                      },
                      DropdownListItem: {
                        style: ({ $theme }) => {
                          return {
                            ...$theme.typography.fontBold14,
                            color: $theme.colors.textNormal,
                          };
                        },
                      },
                      OptionContent: {
                        style: ({ $theme, $selected }) => {
                          return {
                            ...$theme.typography.fontBold14,
                            color: $selected
                              ? $theme.colors.textDark
                              : $theme.colors.textNormal,
                          };
                        },
                      },
                      SingleValue: {
                        style: ({ $theme }) => {
                          return {
                            ...$theme.typography.fontBold14,
                            color: $theme.colors.textNormal,
                          };
                        },
                      },
                      Popover: {
                        props: {
                          overrides: {
                            Body: {
                              style: { zIndex: 5 },
                            },
                          },
                        },
                      },
                    }}
                  />
                </FormFields>
              </DrawerBox>
            </Col>
          </Row>

          <Row>
            <Col lg={4}>
              <FieldDetails>
                Escoge el evento o partido de tu elección
              </FieldDetails>
            </Col>

            <Col lg={8}>
              <DrawerBox>
                <FormFields>
                  <FormLabel>Evento</FormLabel>
                  <Select
                    options={events}
                    labelKey="name"
                    valueKey="value"
                    isLoading={loadingEvents}
                    disabled={loadingEvents}
                    placeholder="Escoge el evento"
                    value={evento}
                    searchable={false}
                    onChange={handleEventoChange}
                    overrides={{
                      Placeholder: {
                        style: ({ $theme }) => {
                          return {
                            ...$theme.typography.fontBold14,
                            color: $theme.colors.textNormal,
                          };
                        },
                      },
                      DropdownListItem: {
                        style: ({ $theme }) => {
                          return {
                            ...$theme.typography.fontBold14,
                            color: $theme.colors.textNormal,
                          };
                        },
                      },
                      OptionContent: {
                        style: ({ $theme, $selected }) => {
                          return {
                            ...$theme.typography.fontBold14,
                            color: $selected
                              ? $theme.colors.textDark
                              : $theme.colors.textNormal,
                          };
                        },
                      },
                      SingleValue: {
                        style: ({ $theme }) => {
                          return {
                            ...$theme.typography.fontBold14,
                            color: $theme.colors.textNormal,
                          };
                        },
                      },
                      Popover: {
                        props: {
                          overrides: {
                            Body: {
                              style: { zIndex: 5 },
                            },
                          },
                        },
                      },
                    }}
                  />

                </FormFields>
              </DrawerBox>
            </Col>
          </Row>

          <Row>
            <Col lg={4}>
              <FieldDetails>
                Escoge el mercado de tu pick
              </FieldDetails>
            </Col>

            <Col lg={8}>
              <DrawerBox>
                <FormFields>
                  <FormLabel>Mercado</FormLabel>
                  <Select
                    options={markets}
                    labelKey="name"
                    valueKey="value"
                    isLoading={loadingMarkets}
                    disabled={loadingMarkets}
                    placeholder="Escoge el mercado"
                    value={mercado}
                    searchable={false}
                    onChange={handleMercadoChange}
                    overrides={{
                      Placeholder: {
                        style: ({ $theme }) => {
                          return {
                            ...$theme.typography.fontBold14,
                            color: $theme.colors.textNormal,
                          };
                        },
                      },
                      DropdownListItem: {
                        style: ({ $theme }) => {
                          return {
                            ...$theme.typography.fontBold14,
                            color: $theme.colors.textNormal,
                          };
                        },
                      },
                      OptionContent: {
                        style: ({ $theme, $selected }) => {
                          return {
                            ...$theme.typography.fontBold14,
                            color: $selected
                              ? $theme.colors.textDark
                              : $theme.colors.textNormal,
                          };
                        },
                      },
                      SingleValue: {
                        style: ({ $theme }) => {
                          return {
                            ...$theme.typography.fontBold14,
                            color: $theme.colors.textNormal,
                          };
                        },
                      },
                      Popover: {
                        props: {
                          overrides: {
                            Body: {
                              style: { zIndex: 5 },
                            },
                          },
                        },
                      },
                    }}
                  />

                </FormFields>
              </DrawerBox>
            </Col>
          </Row>


          <Row>
            <Col lg={4}>
              <FieldDetails>
                Escoge tu selección
              </FieldDetails>
            </Col>

            <Col lg={8}>
              <DrawerBox>
                <FormFields>
                  <FormLabel>Pick</FormLabel>
                  <Select
                    options={marketBook}
                    labelKey="name"
                    valueKey="value"
                    isLoading={loadingMarketBook}
                    disabled={loadingMarketBook}
                    placeholder="Escoge la selección"
                    value={mercadoBook}
                    searchable={false}
                    onChange={handleMercadobookChange}
                    overrides={{
                      Placeholder: {
                        style: ({ $theme }) => {
                          return {
                            ...$theme.typography.fontBold14,
                            color: $theme.colors.textNormal,
                          };
                        },
                      },
                      DropdownListItem: {
                        style: ({ $theme }) => {
                          return {
                            ...$theme.typography.fontBold14,
                            color: $theme.colors.textNormal,
                          };
                        },
                      },
                      OptionContent: {
                        style: ({ $theme, $selected }) => {
                          return {
                            ...$theme.typography.fontBold14,
                            color: $selected
                              ? $theme.colors.textDark
                              : $theme.colors.textNormal,
                          };
                        },
                      },
                      SingleValue: {
                        style: ({ $theme }) => {
                          return {
                            ...$theme.typography.fontBold14,
                            color: $theme.colors.textNormal,
                          };
                        },
                      },
                      Popover: {
                        props: {
                          overrides: {
                            Body: {
                              style: { zIndex: 5 },
                            },
                          },
                        },
                      },
                    }}
                  />

                </FormFields>
              </DrawerBox>
            </Col>
          </Row>


          <Row>
            <Col lg={4}>
              <FieldDetails>
                Escribe el análisis de tu pick
              </FieldDetails>
            </Col>

            <Col lg={8}>
              <DrawerBox>
                <FormFields>
                  <FormLabel>Descripción</FormLabel>
                  <Textarea
                    value={description}
                    onChange={handleDescriptionChange}
                  />
                </FormFields>
              </DrawerBox>
            </Col>
          </Row>

          <Row>
            <Col lg={4}>
              <FieldDetails>
                Indica si es Free Pick o no
              </FieldDetails>
            </Col>

            <Col lg={8}>
              <DrawerBox>
                <FormFields>
                  <FormLabel>Free pick</FormLabel>
                  
                  <Checkbox
                    type="checkbox"
                    value="esFreePick"
                    checked={esFreePick}
                    onChange={handleisFreePickChange}
                    overrides={{
                      Checkmark: {
                        style: {
                          borderTopWidth: '2px',
                          borderRightWidth: '2px',
                          borderBottomWidth: '2px',
                          borderLeftWidth: '2px',
                          borderTopLeftRadius: '4px',
                          borderTopRightRadius: '4px',
                          borderBottomRightRadius: '4px',
                          borderBottomLeftRadius: '4px',
                        },
                      },
                    }}
                  />
                </FormFields>
              </DrawerBox>
            </Col>
          </Row>

          <Row>
            <Col lg={4}>
              <FieldDetails>
                Unidades a apostar
              </FieldDetails>
            </Col>

            <Col lg={8}>
              <DrawerBox>
                <FormFields>
                  <FormLabel>Unidades</FormLabel>
                  <Input
                    inputRef={register({ required: true})}
                    name="unidades"
                  />
                </FormFields>
              </DrawerBox>
            </Col>
          </Row>

        </Scrollbars>

        <ButtonGroup>
          <Button
            kind={KIND.minimal}
            onClick={closeDrawer}
            overrides={{
              BaseButton: {
                style: ({ $theme }) => ({
                  width: '50%',
                  borderTopLeftRadius: '3px',
                  borderTopRightRadius: '3px',
                  borderBottomRightRadius: '3px',
                  borderBottomLeftRadius: '3px',
                  marginRight: '15px',
                  color: $theme.colors.red400,
                }),
              },
            }}
          >
            Cancelar
          </Button>

          <Button
            type="submit"
            overrides={{
              BaseButton: {
                style: ({ $theme }) => ({
                  width: '50%',
                  borderTopLeftRadius: '3px',
                  borderTopRightRadius: '3px',
                  borderBottomRightRadius: '3px',
                  borderBottomLeftRadius: '3px',
                }),
              },
            }}
          >
            Crear Pick
          </Button>
        </ButtonGroup>
      </Form>
    </>
  );
};

export default AddProduct;
