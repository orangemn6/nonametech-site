import Header from "../components/Header"
import ProductList from "../components/ProductList"
import { IProduct } from "../components/Product"
import Footer from "../components/Footer"
import Contact from "../components/Contact"
import Head from "next/head"

import "../styles.scss"

interface IIndexProps {
  products: IProduct[]
}

const Index = (props: IIndexProps) => {
  return (
    <div className="app">
      <Head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
        <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="MzMxN2Y0ODMtOWNhMy00YzUzLWFiNTYtZjMwZTRkZDcxYzM4" id="snipcart"></script>
        <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <Header />
      <main className="main">
        <img src="/static/aquarium.svg" alt="a" className="background-image" />
        <div className="promotional-message">
          <h3>NONAME</h3>
          <h2>Technology</h2>
          <p>An <strong>exclusive collection of custom tech</strong> available for everyone.</p>
        </div>
        <ProductList products={props.products} />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

Index.getInitialProps = async () => {
  return {
    products: [
         {id: "SupermanMousepad", name: "Superman - Mousepad", price: 35.00, image: "../static/halfmoon.jpg", description: "High quality mousepads with stitched edges and clean swirl deisgn."} as IProduct,
         {id: "Redtiger", name: "Red Tiger - Mousepad", price: 35.00, image: "../static/halfmoon.jpg", description: "High quality mousepad with stitched edges and clean swirl design."} as IProduct,
         {id: "Tsunami, name: "Tsunami - Mousepad", price: 35.00, image: "../static/halfmoon.jpg", description: "High quality mousepad with stitched edges and clean swirl design."} as IProduct,
         {id: "Vintage", name: "Vintage - Mousepad", price: 35.00, image: "../static/halfmoon.jpg", description: "High quality mousepad with stitched edges and clean swirl design."} as IProduct,
         {id: "Vortex", name: "Vortex - Mousepad", price: 35.00, image: "../static/halfmoon.jpg", description: "High quality mousepad with stitched edges and clean swirl design."} as IProduct,
         {id: "Bengal", name: "Bengal - Mousepad", price: 35.00, image: "../static/halfmoon.jpg", description: "High quality mousepad with stitched edges and clean swirl design."} as IProduct,
    ]
  }
}

export default Index
