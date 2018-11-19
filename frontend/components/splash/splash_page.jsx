import React from 'react';
import SplashHeader from '../header/splash_header';
import SearchForm from '../search/search_form.jsx';
import Footer from '../footer/footer.jsx';
import SplashSearchNavBar from './splash_search_nav_bar'
import SplashCategories from './splash_categories'


const randomImage = () => {
  const images = ["Bear-Bar_by_Ken-L", "Hanami-Sushi_by_Kevin-P",
    "Union-Square-Market_by_Asim-F", "Mediterani_by_Kristy-K", "Bake-Shack_by_Hope-P",
    "The-Market_by_Jacqueline-M", "Cheshire_by_Natalia-K", "Tasty-Wok_by_Trung-N",
    "Tufino-Pizzeria-Napoletana_by_Bradley-H"];
  const imageStr = images[Math.floor(Math.random() * images.length)];
  const location = imageStr.split("_by_")[0].split("-").join(" ");
  const photographer = imageStr.split("_by_")[1].split("-").join(" ");
  return {image: imageStr, location: location, photographer: photographer};
}

const SplashPage = () => {
  const image = randomImage();

  return (
    <>
      <div className='splash-container-main-background' style={{backgroundImage: `url(${image.image}.jpg)`}}>
        <div className='splash-container-main'>
          <SplashHeader />
          <div className='splash-container-inner'>
            <div className='splash-logo-container'>
              <a href='/'> <img src="/yawp_logo.png" /> </a>
            </div>
            <div className="search-bar-container">
              <SearchForm className='search-bar'/>
            </div>
            <SplashSearchNavBar />
          </div>
          <div className="splash-background-business">
            {image.location}
          </div>
          <div className="splash-background-photographer">
            Photo by <strong>{image.photographer}.</strong>
          </div>
        </div>
      </div>

      <div className='splash-business-categories-container'>
        <SplashCategories />
      </div>

      <div className='main-footer-container'>
        <Footer />
      </div>

    </>
  );
};

export default SplashPage;
