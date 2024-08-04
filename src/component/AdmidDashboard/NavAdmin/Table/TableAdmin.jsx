import React, { useState, useEffect } from 'react'
import './TableAdmin.scss'
import { getFilmTable, getFoodTable, getInvoicePaymentStatusFalse, getInvoicePaymentStatusTrue, getUserRankingTable } from '../../../../service/adminTableService';
function TableAdmin() {

  const [foodTable, setFoodTable] = useState([])
  const [filmTable, setFilmTable] = useState([])
  const [userRankingTable, setUserRankingTable] = useState([])
  const [invoicePaymentStatusTrue, setInvoicePaymentStatusTrue] = useState([])
  const [invoicePaymentStatusFalse, setInvoicePaymentStatusFalse] = useState([])


  // Hàm định dạng số thành chuỗi tiền tệ
  const formatCurrency = (number) => {
    return new Intl.NumberFormat('vi-VN').format(number) + ' VND';
  };
  // getFoodTable
  useEffect(() => {
    getFoodTable()
      .then((response) => {
        setFoodTable(response.data)
      })
      .catch((error) => {
        console.error(error);
      });
  }, [])
  // getFilmTable
  useEffect(() => {
    getFilmTable()
      .then((response) => {
        setFilmTable(response.data)
      })
      .catch((error) => {
        console.error(error);
      });
  }, [])
  // getUserRanking
  useEffect(() => {
    getUserRankingTable()
      .then((response) => {
        setUserRankingTable(response.data)
      })
      .catch((error) => {
        console.error(error);
      });
  }, [])
  // getInvoicePaymentStatusTrue
  useEffect(() => {
    getInvoicePaymentStatusTrue()
      .then((response) => {
        setInvoicePaymentStatusTrue(response.data)
      })
      .catch((error) => {
        console.error(error);
      });
  }, [])
  // getInvoicePaymentStatusFalse
  useEffect(() => {
    getInvoicePaymentStatusFalse()
      .then((response) => {
        setInvoicePaymentStatusFalse(response.data)
      })
      .catch((error) => {
        console.error(error);
      });
  }, [])
  return (

    <div className='w-full p-4'>

      <div className='flex *:me-4 *:mb-4'>

        <div className='flex card-table h-full w-1/2 '>
          <div className='p-4 w-full'>
            <b className='text-red-600'>Food Table</b>
            <table className='table table-hover w-full'>
              <thead className=''>
                <tr className='*:py-3 *:px-4 *:border-b *:border-gray-300 '>
                  <th>No.</th>
                  <th>Food Name</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody className='*:hover:bg-gray-300 '>
                {foodTable.map((food, index) => (
                  <tr className='*:py-3 *:px-4 *:border-b *:border-gray-300'>
                    <td>{index + 1}</td>
                    <td>{food.foodName}</td>
                    <td>{food.description}</td>
                    <td>{formatCurrency(food.price)}</td>
                    <td>{formatCurrency(food.total)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
        <div className='flex card-table h-full w-1/2'>
          <div className='p-4  w-full' >
            <b className='text-red-600'>Film Table</b>
            <table className='table table-hover w-full'>
              <thead className=''>
                <tr className='*:py-3 *:px-4 *:border-b *:border-gray-300 '>
                  <th>No.</th>
                  <th>Film Name</th>
                  <th>Country</th>
                  <th>Rate</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody className='*:hover:bg-gray-300 '>
                {filmTable.map((film, index) => (
                  <tr className='*:py-3 *:px-4 *:border-b *:border-gray-300'>
                    <td>{index + 1}</td>
                    <td>{film.filmName}</td>
                    <td>{film.country}</td>
                    <td>{film.rate}</td>
                    <td>{film.status ? 'Đang chiếu' : 'Không còn chiếu'} </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      <div className='flex *:me-4 *:mb-4'>

        <div className='flex card-table h-full w-full'>
          <div className='p-4  w-full' >
            <b className='text-red-600'>Top 10 Users Ranking</b>
            <table className='table table-hover w-full'>
              <thead className=''>
                <tr className='*:py-3 *:px-4 *:border-b *:border-gray-300 '>
                  <th>No.</th>
                  <th>Last Name</th>
                  <th>First Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Total Invoice</th>
                  <th>Total Amount</th>
                </tr>
              </thead>
              <tbody className='*:hover:bg-gray-300 '>
                {userRankingTable.map((user, index) => (
                  <tr className='*:py-3 *:px-4 *:border-b *:border-gray-300'>
                    <td>{index + 1}</td>
                    <td>{user.lastName}</td>
                    <td>{user.firstName}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.totalInvoice}</td>
                    <td>{formatCurrency(user.totalAmount)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className='flex *:me-4 *:mb-4'>

        <div className='flex card-table h-full w-full'>
          <div className='p-4  w-full' >
            <b className='text-red-600'>Invoice Payment Status True</b>
            <table className='table table-hover w-full'>
              <thead className=''>
                <tr className='*:py-3 *:px-4 *:border-b *:border-gray-300 '>
                  <th>No.</th>
                  <th>Last Name</th>
                  <th>First Name</th>
                  <th>Date</th>
                  <th>Invoice Id</th>
                  <th>Total Amount</th>
                  <th>Payment Status</th>
                  {/* <th></th> */}

                </tr>
              </thead>
              <tbody className='*:hover:bg-gray-300 '>
                {invoicePaymentStatusTrue.map((invoice, index) => (
                  <tr className='*:py-3 *:px-4 *:border-b *:border-gray-300'>
                  <td>{index + 1}</td>
                  <td>{invoice.lastName}</td>
                  <td>{invoice.firstName}</td>
                  <td>{invoice.createDate}</td>
                  <td>{invoice.id}</td>
                  <td>{formatCurrency(invoice.total)}</td>
                  <td>{invoice.status ? 'Đã thanh toán' : 'Chưa thanh toán'}</td>
                  {/* <td><a href='#'> Edit</a></td> */}
                </tr>
                ))}
                
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className='flex *:me-4 *:mb-4'>

        <div className='flex card-table h-full w-full'>
          <div className='p-4  w-full' >
            <b className='text-red-600'>Invoice Payment Status False</b>
            <table className='table table-hover w-full'>
              <thead className=''>
                <tr className='*:py-3 *:px-4 *:border-b *:border-gray-300 '>
                  <th>No.</th>
                  <th>Last Name</th>
                  <th>First Name</th>
                  <th>Date</th>
                  <th>Invoice Id</th>
                  <th>Total Amount</th>
                  <th>Payment Status</th>
                  {/* <th></th> */}

                </tr>
              </thead>
              <tbody className='*:hover:bg-gray-300 '>
                {invoicePaymentStatusFalse.map((invoice, index) => (
                  <tr className='*:py-3 *:px-4 *:border-b *:border-gray-300'>
                  <td>{index + 1}</td>
                  <td>{invoice.lastName}</td>
                  <td>{invoice.firstName}</td>
                  <td>{invoice.createDate}</td>
                  <td>{invoice.id}</td>
                  <td>{formatCurrency(invoice.total)}</td>
                  <td>{invoice.status ? 'Đã thanh toán' : 'Chưa thanh toán'}</td>
                  {/* <td><a href='#'> Edit</a></td> */}
                </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TableAdmin