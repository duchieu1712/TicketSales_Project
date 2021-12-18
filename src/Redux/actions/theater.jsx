import {
  GET_THEATER_REQUEST,
  GET_THEATER_SUCCESS,
  GET_THEATER_FAIL,
  BOOKING_REQUEST,
  BOOKING_SUCCESS,
  BOOKING_FAIL,
  ADD_SHOWTIME_REQUEST,
  ADD_SHOWTIME_SUCCESS,
  ADD_SHOWTIME_FAIL,
} from "../constants/theater";

import axios from "../../Utils/axiosClient";

export const getTheater = (timeId) => {
  return (dispatch) => {
    dispatch({ type: GET_THEATER_REQUEST });
    axios
      .get(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${timeId}`)
      .then((result) => {
        dispatch({
          type: GET_THEATER_SUCCESS,
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_THEATER_FAIL,
          payload: { error: error.response.data },
        });
      });
  };
};

export const bookingTicket = (danhSachVe) => {
  return (dispatch) => {
    dispatch({
      type: BOOKING_REQUEST,
    });
    axios
      .post("QuanLyDatVe/DatVe", danhSachVe)
      .then((result) => {
        dispatch({
          type: BOOKING_SUCCESS,
          payload: { data: result.data, seatSelected: danhSachVe.danhSachVe },
        });
      })
      .catch((error) => {
        dispatch({
          type: BOOKING_FAIL,
          payload: {
            error: error.response.data,
          },
        });
      });
  };
};

export const addShowtime = (values) => {
  return(dispatch) => {
    dispatch({
      type: ADD_SHOWTIME_REQUEST
    })
    axios
      .post("QuanLyDatVe/TaoLichChieu", values)
      .then(result => {
        dispatch({
          type: ADD_SHOWTIME_SUCCESS,
          payload: {data: result.data}
        })
      })
      .catch(error => {
        dispatch({
          type: ADD_SHOWTIME_FAIL,
          payload: {error: error.response.data}
        })
      })
  }
}