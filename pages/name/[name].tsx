import { useState } from 'react';

import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';

import confetti from 'canvas-confetti';


import { pokeApi,httpClient } from '../../api';
import { Layout } from '../../components/layouts';
// import { Pokemon, PokemonListResponse } from '../../interfaces';
// import { getPokemonInfo, localFavorites } from '../../utils';


interface Props {
  blog: any;
}


const PokemonByNamePage: NextPage<Props> = ({ blog }) => {



    
    return (
        <Layout title={ blog?.title || 'ni modo' }>
        </Layout>
    )
};


// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const {data} = await httpClient.get('/public/blogpost?page=1');

  return {
    paths: data?.blogsPosts?.map((e:any) => {
      return {
          // params: {name: `${e.title.replaceAll(' ', '-').substring(0,10)}`}
          params: {name: `${e.id}`}
      }
    }),
    // fallback: false
    fallback: 'blocking'
  }
}



export const getStaticProps: GetStaticProps = async ({ params }) => {
  
  const response = await  httpClient.get('/public/blogpost?page=1');

    const { name } = params as { name: string };

    // const eR = /@(\d+)@/;
    // const nameFix:any = name.match(eR)

    const blog = response?.data?.blogsPosts.filter((e:any) => {
        return Number(e.name) === Number(name)
    })

    return {
        props: {
            blog: blog[0] || null
        }
    }
}





export default PokemonByNamePage;
