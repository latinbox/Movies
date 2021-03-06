import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Image, View, StyleSheet, Text, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Rating from './Rating';
import MovieImage from './MovieImage';
import MovieFullScreenImage from './MovieFullScreenImage';

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    backgroundColor: '#ecf0f1',
    marginBottom: 20,
  },
  textColor: {
    color: '#34495e',
  },
  name: {
    fontSize: 18,
    padding: 10,
  },
  description: {
    fontSize: 15,
    padding: 10,
  },
  rating: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  subtitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  heart: {
    position: 'absolute',
    left: 20,
    top: 20,
    borderRadius: 30,
    padding: 5,
    backgroundColor: 'white',
  },
});

export default class MovieCard extends Component {
  constructor(props) {
    super(props);

    Icon.loadFont();
    this.state = {
      validImage: true,
      starRating: 1,
      fadeAnimation: new Animated.Value(0),
      like: false,
      fullScreenImage: false,
    };
  }

  componentDidMount = () => {
    this.animateMovieCard();
  };

  invalid = () => this.setState({validImage: false});

  starRatingSet = (index) => this.setState({starRating: index});

  toggleLike = () => this.setState(({like}) => ({like: !like}));

  animateMovieCard = () => {
    const {fadeAnimation} = this.state;

    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  toggleFullScreenImage = () =>
    this.setState(({fullScreenImage}) => ({fullScreenImage: !fullScreenImage}));

  render() {
    const {posterurl, title, year, imdbRating} = this.props;
    const {
      validImage,
      starRating,
      fadeAnimation,
      like,
      fullScreenImage,
    } = this.state;

    return (
      <Animated.View style={[styles.container, {opacity: fadeAnimation}]}>
        {fullScreenImage && (
          <MovieFullScreenImage
            posterurl={posterurl}
            onPress={this.toggleFullScreenImage}
          />
        )}
        <MovieImage
          validImage={validImage}
          posterurl={posterurl}
          onError={this.invalid}
          imageOnLongPress={this.toggleFullScreenImage}
        />
        <Text style={[styles.name, styles.textColor]}>{title}</Text>
       <View style={styles.subtitle}>
          <Text style={[styles.description, styles.textColor]}>{year}</Text>
          <Rating
            star
            starCount={5}
            starRating={starRating}
            ratingPress={this.starRatingSet}
          />
          <Text style={[styles.description, styles.textColor, styles.rating]}>
            {imdbRating}
          </Text>
        </View>
        <View style={styles.heart}>
          <Rating heart like={like} ratingPress={this.toggleLike} />
        </View>
      </Animated.View>
    );
  }
}
