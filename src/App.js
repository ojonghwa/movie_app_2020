import React from 'react';
import PropTypes from 'prop-types';

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  { id: 1,
    name: 'Kimchi',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa00vIl2BSy8YGnjJf9coYVXDNX7FeZXkrK5YrG2zodMCzoqJrnajNwlBPeWQSWf5b6UiRJyk&usqp=CAc',
    rating: 5.0,
  },
  { id: 2,
    name: 'Samgyeopsal',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe658KEw5L-jUYiNhPUVHGCuqiU4eh-H0qOQ&usqp=CAU',
    rating: 4.9,
  },
  { id: 3,
    name: 'Bibimbap',
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR4UnNFkQ5HcG2r6LVqYdeSiQtj4cLVrJZrjlI2VBOHEB8Fjh1FYS7w5LisDGyT2O-1LQLK_hrTf0OcIT-TGd8ppWRKksncqXq3rAljLoA&usqp=CAE',
    rating: 4.5,
  },
  { id: 4,
    name: 'Doncasu',
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT_p-qZjPilExj1huA020UaER02KyhHhMtCSiNur-K_6y6Gds7BUhQ8WtGZt-ToXdPhy9XAp2GaBA7qDDbfStnVkVRmSVm0lcVIEGyw10A&usqp=CAE',
    rating: 4.7,
   },
  { id: 5,
    name: 'Kimbap',
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTVLh8PGk3nvKvG1bwaeJRrFDs7jRBlw833SgTtEJQ5DkdZwXK0fsTSQlpUFUHHyLXA8QG7KSrQml7xQ2gStD4tP7wUo0Yqy0aS59ZyLiE&usqp=CAE',
    rating: 4.0,
  },
];


function App() {
  return (
    <div>
      { foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
        )) 
      }
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,  
};

export default App;
