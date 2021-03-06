import React, { Component } from 'react';
import { Container } from 'native-base';
import { Header } from 'common/components';
import { BASE_COLOR } from 'style/colors';
import { CardLine } from 'feedback/components';
import { ActivityIndicator } from 'react-native';

class FeedbackScreen extends Component {
  render() {
    const { listFeedbacks, onPressMenu, isLoading } = this.props;
    if (isLoading) {
      return (
        <Container style={{ backgroundColor: '#22262a', flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size="small" color="#FFF" />
        </Container>
      )
    }
    return (
      <Container style={{ backgroundColor: '#22262a' }}>
        <Header
          title="Feedback"
          leftIcon="menu"
          onPressLeft={() => onPressMenu()}
          bgColor={BASE_COLOR}
          barColor="light-content"
        />

        <CardLine list={listFeedbacks} />
      </Container>
    );
  }
}

export default FeedbackScreen;
