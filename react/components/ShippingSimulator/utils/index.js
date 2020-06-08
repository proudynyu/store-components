let addressId = 1

const getRandomAddressId = () =>
  (addressId++ * new Date().getTime() * -1).toString().replace('-', '')

export const getNewAddress = country => {
  const randomAddressId = getRandomAddressId()
  return {
    addressId: randomAddressId,
    addressType: 'residential',
    city: null,
    complement: null,
    country,
    geoCoordinates: [],
    neighborhood: null,
    number: null,
    postalCode: null,
    receiverName: null,
    reference: null,
    state: null,
    street: null,
    addressQuery: null,
  }
}
