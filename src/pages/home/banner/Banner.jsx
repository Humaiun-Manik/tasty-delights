import { Carousel, Table } from "react-bootstrap";
import img1 from "./../../../assets/images/home/banner-1.jpg";
import img2 from "./../../../assets/images/home/banner-2.jpg";
import img3 from "./../../../assets/images/home/banner-3.jpg";

const Banner = () => {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="First slide" />
        <Carousel.Caption className="h-100 d-flex align-items-center justify-content-center flex-column  text-white">
          <h2
            className="text-warning  fw-semibold"
            style={{ fontSize: "70px", fontFamily: "'Allura', cursive" }}
          >
            Taste the Difference
          </h2>
          <h1 style={{ fontSize: "80px" }}>Fine & Delicious Food</h1>
          <h3 className="bg-warning mt-4 py-3 px-5">SINCE 1952</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="Second slide" />
        <Carousel.Caption className="h-100 d-flex align-items-center justify-content-center flex-column  text-white">
          <h2
            className="text-warning fw-semibold"
            style={{ fontSize: "70px", fontFamily: "'Allura', cursive" }}
          >
            Experience the grand setting
          </h2>
          <h1 className="text-uppercase" style={{ fontSize: "80px" }}>
            the celebrated cuisine of
          </h1>
          <h3 className="text-uppercase bg-warning mt-4 py-3 px-5">kudil-restaurant</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="Third slide" />
        <Carousel.Caption className="h-100 d-flex align-items-center justify-content-center flex-column  text-white">
          <div style={{ marginLeft: "700px" }}>
            <h5
              className="text-start text-warning fw-semibold"
              style={{ fontSize: "70px", fontFamily: "'Allura', cursive" }}
            >
              Todays Special
            </h5>
            <h1 className="text-uppercase border-bottom border-warning border-3" style={{ fontSize: "80px" }}>
              tasting menus
            </h1>
            <hr className="text-warning" />
            <Table className="text-start">
              <tbody>
                <tr>
                  <td className="border-0">
                    <h3>Grilled Octopus</h3>
                    <p className="mb-0">with Borlotti Marinati and Spicy Limoncello Vinaigrette</p>
                  </td>
                  <td className="text-end border-0">
                    <h3>$18</h3>
                  </td>
                </tr>
                <tr>
                  <td className="border-0">
                    <h3>Mussels alla Tarantina</h3>
                    <p className="mb-0">with Chianti Vinegar and Ricotta Salata</p>
                  </td>
                  <td className="text-end border-0">
                    <h3>$19</h3>
                  </td>
                </tr>
                <tr>
                  <td className="border-0">
                    <h3>Roasted Beet Tartare</h3>
                    <p className="mb-0">with Rice Beans and Arugula</p>
                  </td>
                  <td className="text-end border-0">
                    <h3>$10</h3>
                  </td>
                </tr>
                <tr>
                  <td className="border-0">
                    <h3>Armandinos Salumi</h3>
                    <p className="mb-0">Culatello and Hot Soppressate</p>
                  </td>
                  <td className="text-end border-0">
                    <h3>$15</h3>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
