import * as React from 'react';
import {
  View,
  Dimensions,
} from 'react-native';

import {
  CardContainer,
  CardItem,
  CardText,
  CardTitle,
  CardSubtitle
} from './styles';

import Carousel from 'react-native-snap-carousel';

const horizontalMargin = 20;
const slider_width = Dimensions.get('window').width;
const item_width = Math.round(slider_width * 0.84) - (Platform.OS === 'android' ? horizontalMargin : 0);

export default class TopCharts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: "Rap",
          image: require('../../../assets/images/artists/1.png')
        },
        {
          title: "Trap",
          image: require('../../../assets/images/artists/2.jpg')
        },
        {
          title: "Rock",
          image: require('../../../assets/images/artists/3.png')
        },
        {
          title: "Blues",
          image: require('../../../assets/images/artists/4.png')
        },
      ]
    }
  }

  _renderItem({ item, index }) {
    return (
      <View
        style={{ alignItems: "center" }}
      >
        <CardItem
          source={item.image}
          imageStyle={{
            borderRadius: 36,
          }}
        >
          <CardText>
            <CardTitle>{item.title}</CardTitle>
            <CardSubtitle>Top 50 músicas</CardSubtitle>
          </CardText>
        </CardItem>
      </View>
    );
  }

  render() {
    return (
      <CardContainer>
        <Carousel
          ref={ref => this.carousel = ref}
          data={this.state.carouselItems}
          sliderWidth={slider_width}
          itemWidth={item_width}
          renderItem={this._renderItem}
          inactiveSlideScale={0.89}
          firstItem={1}
        />
      </CardContainer>
    );
  }
}

