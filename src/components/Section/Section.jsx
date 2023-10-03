import { Component } from 'react';

import { SectionWrap} from './Section.styled';

export default class Section extends Component {
  render() {
    return (
      <SectionWrap>
        {this.props.children}
      </SectionWrap>
    );
  }
}
