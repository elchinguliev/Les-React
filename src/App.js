import AddUpdate from './AddUpdate';
import './App.css';
import Product from './Product';



const products = [
  {
    Index:1,
    Name: "Coca Cola",
    Description:
      "Coca-Cola is a carbonated, sweetened soft drink and is the world's best-selling soda.",
    Price: 1,
    Image:
      "https://cdn3.evostore.io/productimages/vow_premium/l/arn10943.jpg",
  },
  {
      Index:2,
      Name: "Chicken",
      Description:
      "Chickens are average-sized fowls, characterized by smaller heads, short beaks and wings, and a round body perched on featherless legs. ",
      Price: 7.2,
      Image:
      "https://files.recipetips.com/kitchen/images/refimages/chicken/chickenwhole_252.jpg",
  },
  {
      Index:3,
      Name: "Beef",
      Description:
      "beef, flesh of mature cattle, as distinguished from veal, the flesh of calves. The best beef is obtained from early maturing, special beef breeds. ",
      Price: 17,
      Image:
      "https://cdn.shopify.com/s/files/1/0500/2608/6565/files/22-05-31_Os_Meatshop-13_1024x1024.jpg?v=1654586835",
  },
  {
      Index:4,
      Name: "Heineken beer",
      Description:
      "Heineken Lager Beer (Dutch: Heineken Pilsener), or simply Heineken (pronounced [ˈɦɛinəkə(n)]). ",
      Price: 34,
      Image:
      "https://bazarstore.az/cdn/shop/products/30000414.jpg?v=1693551221",
  },
];
function App() {
  return (
    <div className="App">
      <div>
      {/* <Product productInfo={products[0]}></Product>
      <Product productInfo={products[1]}></Product>
      <Product productInfo={products[2]}></Product>
      <Product productInfo={products[3]}></Product> */}
    {
      products.map((p)=>
      ( <Product size={100} productInfo={p}></Product>)
      )
    }
    <AddUpdate></AddUpdate>

      </div>
    </div>
  );
}

export default App;
