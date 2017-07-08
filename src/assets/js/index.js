'use strict';

const render = (root) => {
    root.empty();
    root.append(Principal());
    //root.append(Dashboard());
};

const laboratoriaNews = {
  news : null,
  idNew : null,
  category:null ,
  idCategory:null
}


$( _ => {

  getJSON('/api/news/', (err, json) => {
  laboratoriaNews.news = json;
  console.log(laboratoriaNews.news);
  const root = $('.root');
  render(root);
  });

  getJSON('/api/categories/', (err, json) => {
  laboratoriaNews.category = json;
  console.log(  laboratoriaNews.category);
  });

  getJSON('/api/categories/'+laboratoriaNews.idCategory, (err, json) => {
  laboratoriaNews.idCategory = json;
  console.log(laboratoriaNews.idCategories);
  });

  getJSON('/api/news/' + laboratoriaNews.idNew, (err, json) => {
    laboratoriaNews.idNew = json;
    console.log(laboratoriaNews.idNew);
  });

});
