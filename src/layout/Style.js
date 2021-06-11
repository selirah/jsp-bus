import styled from 'styled-components'

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;

  h4 {
    font-weight: 300;
    font-size: 20px;
  }
`

const MainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const TabsLayout = styled.nav`
  width: 40%;

  .nav.nav-tabs {
    border: none;
    background: #f3f3f3;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    .nav-item {
      border-radius: 0;
      text-align: center;
      .nav-link {
        border: none;
        padding: 10px 20px;
        color: #222;
        border-radius: 0;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 15px;
        font-weight: 700;
        display: inline-block;
      }
      i {
        font-size: 18px;
        font-weight: 700;
        padding-right: 10px;
      }

      .active {
        color: #a20c25;
      }
    }
  }

  .tab-content {
    line-height: 25px;
    border: none;
    padding: 20px 15px !important;
    text-align: left;

    .input-group {
      .form-control {
        border-radius: 0;
        font-weight: 700;
        color: #222;

        &::placeholder {
          color: #bcb9b8;
          font-weight: 700;
        }
      }
    }
  }
`

const MapLayout = styled.div`
  width: 60%;
`

const StopInfoWindowWrapper = styled.div`
  background: #fff;
  border: 1px solid #ccc;
  padding: 15px;
`

const BusStopsLayout = styled.div`
  margin-top: 30px;
  height: 80vh;
  overflow-y: auto;

  .card {
    margin-bottom: 10px;
    border-radius: 0;
    border-bottom: 0;
    border: none;

    .card-header {
      border-bottom: 0;
      padding: 10px;
      display: flex;
      background-color: #f3f3f3;
      border: none;
      height: 2.5rem;
      color: #222;
      justify-content: space-between;
      &:not(::last-child) {
        border-bottom: none;
      }

      h4 {
        font-size: 0.9rem;
        font-weight: 400;
      }

      h5 {
        margin-right: 30px;
        font-size: 0.95rem;
        font-weight: 500;
      }

      svg {
        margin-right: 5px;
      }

      &:after {
        width: 35px;
        font-size: 20px;
        text-align: center;
        border-radius: 5px;
        top: 0.5rem;
        right: 0;
        position: absolute;
        font-weight: 500;
        font-family: 'FontAwesome';
        content: '\\f13a';
        cursor: pointer;
      }
      .display-header {
        display: flex;
        justify-content: space-between;
      }
    }

    .collapse {
      .card-body {
        padding: 10px 0px 10px 0px;
        .lines-container {
          text-align: left;
        }
        .list-group {
          border-radius: 0;
          height: 300px;
          overflow-y: auto;
          svg {
            color: #a20c25;
            cursor: pointer;
            animation: '$spin 1s 1';
          }
          .list-group-item {
            border: none;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid rgba(0, 0, 0, 0.125);
            text-align: left;
            img {
              width: 20px;
              margin-right: 0.7rem;
            }

            svg {
              color: #a20c25;
              margin-left: auto;
              margin-top: 10px;
            }

            .display-names {
              display: flex;
              justify-content: space-between;
              h4 {
                font-size: 0.85rem;
                margin-right: 5px;
              }
              h5 {
                font-size: 0.85rem;
                color: #aaa;
              }
            }

            .display-info {
              h4 {
                font-size: 0.85rem;
                color: #a20c25;
              }
            }
          }

          @keyframes spin {
            0% {
              transform: 'rotate(0deg)';
            }
            100% {
              transform: 'rotate(360deg)';
            }
          }
        }
      }
    }
  }
`

const TimesLayout = styled.div`
  .close-button {
    display: flex;
    justify-content: flex-end;
    button {
      background: #a20c25;
      border: 1px solid #a20c25;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      color: #fff;
      font-weight: 700;
      text-align: center;
    }
    h4 {
      padding-right: 1rem;
      margin-top: 0.5rem;
      font-size: 0.85rem;
      font-weight: 700;
    }
  }
  .content {
    display: flex;
    justify-content: center;
    text-align: center;

    .table-list {
      width: 100%;
      .table {
        thead {
          background: #a20c25;
          tr {
            th {
              color: #fff;
              border-bottom: none;
              border-right: 1px solid #fff;
              padding: 0.3rem;
              font-weight: 700;
              font-size: 0.75rem;
            }
          }
        }
        tbody {
          height: 300px;
          overflow-y: auto;
          tr {
            background: #f3f3f3;
            td {
              border-right: 1px solid #fff;
              padding: 0.3rem;
              font-size: 0.75rem;
              color: #a20c25;
              font-weight: 700;
              border-bottom: 1px solid #fff;
              border-top: 1px solid #fff;
            }
          }
        }
      }
    }
  }
`

const BusLinesLayout = styled.div`
  margin-top: 30px;
  height: 80vh;
  overflow-y: auto;

  .card {
    margin-bottom: 10px;
    border-radius: 0;
    border-bottom: 0;
    border: none;

    .card-header {
      border-bottom: 0;
      padding: 10px;
      display: flex;
      background-color: #f3f3f3;
      border: none;
      height: 2.5rem;
      color: #222;
      justify-content: space-between;
      &:not(::last-child) {
        border-bottom: none;
      }

      h4 {
        font-size: 0.9rem;
        font-weight: 400;
        img {
          width: 20px;
          margin-right: 0.7rem;
        }
      }

      h5 {
        margin-right: 30px;
        font-size: 0.95rem;
        font-weight: 500;
      }

      svg {
        margin-right: 5px;
      }

      &:after {
        width: 35px;
        font-size: 20px;
        text-align: center;
        border-radius: 5px;
        top: 0.5rem;
        right: 0;
        position: absolute;
        font-weight: 500;
        font-family: 'FontAwesome';
        content: '\\f13a';
        cursor: pointer;
      }
      .display-header {
        display: flex;
        justify-content: space-between;
      }
    }

    .collapse {
      .card-body {
        padding: 10px 0px 10px 0px;
        .lines-container {
          text-align: left;
        }
        .list-group {
          border-radius: 0;
          height: 300px;
          overflow-y: auto;
          svg {
            color: #a20c25;
            cursor: pointer;
            animation: '$spin 1s 1';
          }
          .list-group-item {
            border: none;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid rgba(0, 0, 0, 0.125);
            text-align: left;

            h4 {
              font-size: 0.85rem;
              margin-right: 5px;
            }
            .map-pin {
              margin-right: 0.7rem;
            }

            .calendar {
              color: #a20c25;
              margin-left: auto;
            }
          }

          @keyframes spin {
            0% {
              transform: 'rotate(0deg)';
            }
            100% {
              transform: 'rotate(360deg)';
            }
          }
        }
      }
    }
  }
`

export {
  LoaderWrapper,
  MainWrapper,
  TabsLayout,
  MapLayout,
  StopInfoWindowWrapper,
  BusStopsLayout,
  TimesLayout,
  BusLinesLayout
}
