import React from 'react';
import Banner from '../../components/Banner/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';
import { Helmet } from 'react-helmet-async';

const Home = () => {

  const data = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>বইপোকা | Home </title>
      </Helmet>
      <Banner/>
      <Books data={data}/>
    </div>
  );
};

export default Home;