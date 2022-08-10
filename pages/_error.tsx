import NavBar from '../components/NavBar';

function FourOhFour() {
  return (
    <section className="p-strip">
      <div className="row">
        <div className="col-6 col-medium-3 u-vertically-center u-align--center">
          <img
            src="https://assets.ubuntu.com/v1/03c7318e-image-404.svg"
            alt="Page not found"
            width="360"
            height="365"
          />
        </div>
        <div className="col-6 col-medium-3 u-vertically-center">
          <div>
            <h1>404: Page not found</h1>
            <p className="p-heading--4">Sorry, we couldn’t find that page.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FourOhFour;
