const listings = [
  {
    id: 201,
    title: "Fill envelopes",
    images: [{ fileName: "travis" }],
    price: 25,
    categoryId: 5,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 3,
    title: "Deliver sign and lockbox",
    images: [{ fileName: "meg" }],
    categoryId: 1,
    price: 15,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 1,
    title: "Prepare event room",
    description:
      "I'm selling my furniture at a discount price. Pick up at Venice. DM me asap.",
    images: [
      { fileName: "richie" },
      { fileName: "couch2" },
      { fileName: "couch3" },
    ],
    price: 50,
    categoryId: 1,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 2,
    title: "Hand out flyers",
    images: [{ fileName: "tiff" }],
    categoryId: 5,
    price: 40,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 102,
    title: "Make key copies",
    images: [{ fileName: "brett" }],
    price: 10,
    categoryId: 3,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 101,
    title: "Pick up package",
    images: [{ fileName: "tiffani" }],
    price: 10,
    categoryId: 3,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 4,
    title: "Help move office furniture",
    description: "No rips no stains no odors",
    images: [{ fileName: "kim" }],
    categoryId: 1,
    price: 15,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 6,
    title: "Deliver package",
    images: [{ fileName: "travis" }],
    categoryId: 5,
    price: 20,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
];

const addListing = (listing) => {
  listing.id = listings.length + 1;
  listings.push(listing);
};

const getListings = () => listings;

const getListing = (id) => listings.find((listing) => listing.id === id);

const filterListings = (predicate) => listings.filter(predicate);

module.exports = {
  addListing,
  getListings,
  getListing,
  filterListings,
};
