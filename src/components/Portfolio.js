import React from 'react'
import Lightbox from 'react-image-lightbox'
import { withPrefix } from 'gatsby-link'

class Portfolio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state
    let { images } = this.props

    return (
      <div css={{position: 'relative'}}>
        <div
          css={{
            cursor: 'pointer',
            backgroundImage: `url(${withPrefix(this.props.feature)})`,
            backgroundSize: 'cover',
            paddingTop: '100%'
          }}
          onClick={() => this.setState({ isOpen: true })}/>
        <div css={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          backgroundColor: '#303030',
          color: 'white',
          textAlign: 'center',
          padding: 3
        }}>{this.props.name}</div>

        {isOpen && (
          <Lightbox
            imagePadding={60}
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    )
  }
}

export default Portfolio
