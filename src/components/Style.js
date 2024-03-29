import styled from 'styled-components'

const SpinnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 10000000000;
  top: 0;
  right: 0;

  @media only screen and (min-width: 768px) and (max-width: 1220px) {
    width: calc(100% - 80px);
  }

  @media only screen and (max-width: 767px) {
    width: 100%;
  }

  .spinnerContentLoader {
    width: 30px;
    height: 30px;
    animation: svgSpinner 1.4s linear infinite;
  }

  .spinnerContentLoaderCircle {
    animation: svgSpinnerCircle 1.4s ease-in-out infinite;
    stroke-dasharray: 80px, 200px;
    stroke-dashoffset: 0px;
    stroke: #03a9f4;
    stroke-linecap: round;
  }

  @keyframes svgSpinner {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes svgSpinnerCircle {
    0% {
      stroke-dasharray: 1px, 200px;
      stroke-dashoffset: 0px;
    }
    50% {
      stroke-dasharray: 100px, 200px;
      stroke-dashoffset: -15px;
    }
    100% {
      stroke-dasharray: 100px, 200px;
      stroke-dashoffset: -120px;
    }
  }
`

const EmptyBoxLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .empty-box {
    border: 1px solid #eeeeee;
    padding: 2rem;
    text-align: center;
    margin: 0 auto;
    width: 100%;

    h4 {
      font-size: 2rem;
      font-weight: 300;
    }
    p {
      font-size: 0.85rem;
      font-weight: 700;
    }
  }
`

export { SpinnerWrapper, EmptyBoxLayout }
