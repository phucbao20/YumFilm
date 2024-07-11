import React from 'react'
import MenuDashboard from '../../MenuAdmin/MenuDashboard';
import FooterAdminDashboard from '../../FooterAdmin/FooterAdminDashboard'
import './TableAdmin.scss'
function TableAdmin() {
  return (
    
          <div className='w-full p-4'>

            <div className='flex *:me-4 *:mb-4'>

              <div className='flex card-table h-full w-1/2 '>
                <div className='p-4 w-full'>
                  <p>Food Table</p>
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
                      <tr className='*:py-3 *:px-4 *:border-b *:border-gray-300'>
                        <td>1</td>
                        <td>Combo FA</td>
                        <td>1 bắp 1 nước</td>
                        <td>100.000 VND</td>
                        <td>15.400.000 VND</td>
                      </tr>
                      <tr className='*:py-2 *:px-4 *:border-b *:border-gray-300'>
                        <td>2</td>
                        <td>Lật Mật 7</td>
                        <td>100.000 VND</td>
                        <td>154</td>
                        <td>15.400.000 VND</td>
                      </tr>
                      <tr className='*:py-2 *:px-4 *:border-b *:border-gray-300'>
                        <td>3</td>
                        <td>Mèo Béo Siêu Quậy</td>
                        <td>100.000 VND</td>
                        <td>154</td>
                        <td>15.400.000 VND</td>
                      </tr>
                      <tr className='*:py-2 *:px-4 *:border-b *:border-gray-300'>
                        <td>4</td>
                        <td>Mèo Béo Siêu Quậy</td>
                        <td>100.000 VND</td>
                        <td>154</td>
                        <td>15.400.000 VND</td>
                      </tr>
                      <tr className='*:py-2 *:px-4 *:border-b *:border-gray-300'>
                        <td>5</td>
                        <td>Mèo Béo Siêu Quậy</td>
                        <td>100.000 VND</td>
                        <td>154</td>
                        <td>15.400.000 VND</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

              </div>
              <div className='flex card-table h-full w-1/2'>
                <div className='p-4  w-full' >
                  <p>Film Table</p>
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
                      <tr className='*:py-3 *:px-4 *:border-b *:border-gray-300'>
                        <td>1</td>
                        <td>Cửu Long Thành Trại</td>
                        <td>Trung Quốc</td>
                        <td>8.9</td>
                        <td>Đang chiếu</td>
                      </tr>
                      <tr className='*:py-3 *:px-4 *:border-b *:border-gray-300'>
                        <td>2</td>
                        <td>Cửu Long Thành Trại</td>
                        <td>Trung Quốc</td>
                        <td>8.9</td>
                        <td>Đang chiếu</td>
                      </tr>
                      <tr className='*:py-3 *:px-4 *:border-b *:border-gray-300'>
                        <td>3</td>
                        <td>Cửu Long Thành Trại</td>
                        <td>Trung Quốc</td>
                        <td>8.9</td>
                        <td>Đang chiếu</td>
                      </tr>
                      <tr className='*:py-3 *:px-4 *:border-b *:border-gray-300'>
                        <td>4</td>
                        <td>Cửu Long Thành Trại</td>
                        <td>Trung Quốc</td>
                        <td>8.9</td>
                        <td>Đang chiếu</td>
                      </tr>
                      <tr className='*:py-3 *:px-4 *:border-b *:border-gray-300'>
                        <td>5</td>
                        <td>Cửu Long Thành Trại</td>
                        <td>Trung Quốc</td>
                        <td>8.9</td>
                        <td>Đang chiếu</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
            
            <div className='flex *:me-4 *:mb-4'>

              <div className='flex card-table h-full w-full'>
                <div className='p-4  w-full' >
                  <p>Top 10 Users Ranking</p>
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
                      <tr className='*:py-3 *:px-4 *:border-b *:border-gray-300'>
                        <td>1</td>
                        <td>Nguyễn Văn</td>
                        <td>A</td>
                        <td>anv@gmail.com</td>
                        <td>0544653120</td>
                        <td>35</td>
                        <td>140.120.000 VND</td>

                      </tr>
                      <tr className='*:py-3 *:px-4 *:border-b *:border-gray-300'>
                        <td>1</td>
                        <td>Nguyễn Văn</td>
                        <td>A</td>
                        <td>anv@gmail.com</td>
                        <td>0544653120</td>
                        <td>35</td>
                        <td>140.120.000 VND</td>

                      </tr>
                      <tr className='*:py-3 *:px-4 *:border-b *:border-gray-300'>
                        <td>2</td>
                        <td>Nguyễn Văn</td>
                        <td>A</td>
                        <td>anv@gmail.com</td>
                        <td>0544653120</td>
                        <td>35</td>
                        <td>140.120.000 VND</td>

                      </tr>
                      <tr className='*:py-3 *:px-4 *:border-b *:border-gray-300'>
                        <td>3</td>
                        <td>Nguyễn Văn</td>
                        <td>A</td>
                        <td>anv@gmail.com</td>
                        <td>0544653120</td>
                        <td>35</td>
                        <td>140.120.000 VND</td>

                      </tr>
                      <tr className='*:py-3 *:px-4 *:border-b *:border-gray-300'>
                        <td>4</td>
                        <td>Nguyễn Văn</td>
                        <td>A</td>
                        <td>anv@gmail.com</td>
                        <td>0544653120</td>
                        <td>35</td>
                        <td>140.120.000 VND</td>

                      </tr>
                      <tr className='*:py-3 *:px-4 *:border-b *:border-gray-300'>
                        <td>5</td>
                        <td>Nguyễn Văn</td>
                        <td>A</td>
                        <td>anv@gmail.com</td>
                        <td>0544653120</td>
                        <td>35</td>
                        <td>140.120.000 VND</td>

                      </tr>
                      <tr className='*:py-3 *:px-4 *:border-b *:border-gray-300'>
                        <td>6</td>
                        <td>Nguyễn Văn</td>
                        <td>A</td>
                        <td>anv@gmail.com</td>
                        <td>0544653120</td>
                        <td>35</td>
                        <td>140.120.000 VND</td>

                      </tr>
                      <tr className='*:py-3 *:px-4 *:border-b *:border-gray-300'>
                        <td>7</td>
                        <td>Nguyễn Văn</td>
                        <td>A</td>
                        <td>anv@gmail.com</td>
                        <td>0544653120</td>
                        <td>35</td>
                        <td>140.120.000 VND</td>

                      </tr>
                      <tr className='*:py-3 *:px-4 *:border-b *:border-gray-300'>
                        <td>8</td>
                        <td>Nguyễn Văn</td>
                        <td>A</td>
                        <td>anv@gmail.com</td>
                        <td>0544653120</td>
                        <td>35</td>
                        <td>140.120.000 VND</td>

                      </tr>
                      <tr className='*:py-3 *:px-4 *:border-b *:border-gray-300'>
                        <td>9</td>
                        <td>Nguyễn Văn</td>
                        <td>A</td>
                        <td>anv@gmail.com</td>
                        <td>0544653120</td>
                        <td>35</td>
                        <td>140.120.000 VND</td>

                      </tr>
                      <tr className='*:py-3 *:px-4 *:border-b *:border-gray-300'>
                        <td>10</td>
                        <td>Nguyễn Văn</td>
                        <td>A</td>
                        <td>anv@gmail.com</td>
                        <td>0544653120</td>
                        <td>35</td>
                        <td>140.120.000 VND</td>

                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className='flex *:me-4 *:mb-4'>

              <div className='flex card-table h-full w-full'>
                <div className='p-4  w-full' >
                  <p>Invoice Payment Status True</p>
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
                        <th></th>

                      </tr>
                    </thead>
                    <tbody className='*:hover:bg-gray-300 '>
                      <tr className='*:py-3 *:px-4 *:border-b *:border-gray-300'>
                        <td>1</td>
                        <td>Nguyễn Văn</td>
                        <td>A</td>
                        <td>15-01-2023</td>
                        <td>20</td>
                        <td>150.000 VND</td>
                        <td>Thanh toán thành công</td>
                        <td><a href='#'> Edit</a></td>
                      </tr>
                      <tr className='*:py-3 *:px-4 *:border-b *:border-gray-300'>
                        <td>2</td>
                        <td>Nguyễn Văn</td>
                        <td>A</td>
                        <td>15-01-2023</td>
                        <td>19</td>
                        <td>150.000 VND</td>
                        <td>Thanh toán thành công</td>
                        <td><a href='#'> Edit</a></td>
                      </tr>
                      <tr className='*:py-3 *:px-4 *:border-b *:border-gray-300'>
                        <td>3</td>
                        <td>Nguyễn Văn</td>
                        <td>A</td>
                        <td>15-01-2023</td>
                        <td>18</td>
                        <td>150.000 VND</td>
                        <td>Thanh toán thành công</td>
                        <td><a href='#'> Edit</a></td>
                      </tr>
                      <tr className='*:py-3 *:px-4 *:border-b *:border-gray-300'>
                        <td>4</td>
                        <td>Nguyễn Văn</td>
                        <td>A</td>
                        <td>15-01-2023</td>
                        <td>17</td>
                        <td>150.000 VND</td>
                        <td>Thanh toán thành công</td>
                        <td><a href='#'> Edit</a></td>
                      </tr>
                      <tr className='*:py-3 *:px-4 *:border-b *:border-gray-300'>
                        <td>5</td>
                        <td>Nguyễn Văn</td>
                        <td>A</td>
                        <td>15-01-2023</td>
                        <td>16</td>
                        <td>150.000 VND</td>
                        <td>Thanh toán thành công</td>
                        <td><a href='#'> Edit</a></td>
                      </tr>
                      <tr className='*:py-3 *:px-4 *:border-b *:border-gray-300'>
                        <td>6</td>
                        <td>Nguyễn Văn</td>
                        <td>A</td>
                        <td>15-01-2023</td>
                        <td>15</td>
                        <td>150.000 VND</td>
                        <td>Thanh toán thành công</td>
                        <td><a href='#'> Edit</a></td>
                      </tr>
                      <tr className='*:py-3 *:px-4 *:border-b *:border-gray-300'>
                        <td>7</td>
                        <td>Nguyễn Văn</td>
                        <td>A</td>
                        <td>15-01-2023</td>
                        <td>14</td>
                        <td>150.000 VND</td>
                        <td>Thanh toán thành công</td>
                        <td><a href='#'> Edit</a></td>
                      </tr>
                      <tr className='*:py-3 *:px-4 *:border-b *:border-gray-300'>
                        <td>8</td>
                        <td>Nguyễn Văn</td>
                        <td>A</td>
                        <td>15-01-2023</td>
                        <td>13</td>
                        <td>150.000 VND</td>
                        <td>Thanh toán thành công</td>
                        <td><a href='#'> Edit</a></td>
                      </tr>
                      <tr className='*:py-3 *:px-4 *:border-b *:border-gray-300'>
                        <td>9</td>
                        <td>Nguyễn Văn</td>
                        <td>A</td>
                        <td>15-01-2023</td>
                        <td>12</td>
                        <td>150.000 VND</td>
                        <td>Thanh toán thành công</td>
                        <td><a href='#'> Edit</a></td>
                      </tr>
                      <tr className='*:py-3 *:px-4 *:border-b *:border-gray-300'>
                        <td>10</td>
                        <td>Nguyễn Văn</td>
                        <td>A</td>
                        <td>15-01-2023</td>
                        <td>11</td>
                        <td>150.000 VND</td>
                        <td>Thanh toán thành công</td>
                        <td><a href='#'> Edit</a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className='flex *:me-4 *:mb-4'>

              <div className='flex card-table h-full w-full'>
                <div className='p-4  w-full' >
                  <p>Invoice Payment Status False</p>
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
                        <th></th>

                      </tr>
                    </thead>
                    <tbody className='*:hover:bg-gray-300 '>
                      <tr className='*:py-3 *:px-4 *:border-b *:border-gray-300'>
                        <td>1</td>
                        <td>Nguyễn Văn</td>
                        <td>A</td>
                        <td>15-01-2023</td>
                        <td>151</td>
                        <td>150.000 VND</td>
                        <td>Thanh toán không thành công</td>
                        <td><a href='#'> Edit</a></td>
                      </tr>
                      <tr className='*:py-3 *:px-4 *:border-b *:border-gray-300'>
                        <td>2</td>
                        <td>Nguyễn Văn</td>
                        <td>A</td>
                        <td>15-01-2023</td>
                        <td>152</td>
                        <td>150.000 VND</td>
                        <td>Thanh toán không thành công</td>
                        <td><a href='#'> Edit</a></td>
                      </tr>
                      <tr className='*:py-3 *:px-4 *:border-b *:border-gray-300'>
                        <td>3</td>
                        <td>Nguyễn Văn</td>
                        <td>A</td>
                        <td>15-01-2023</td>
                        <td>153</td>
                        <td>150.000 VND</td>
                        <td>Thanh toán không thành công</td>
                        <td><a href='#'> Edit</a></td>
                      </tr>
                      <tr className='*:py-3 *:px-4 *:border-b *:border-gray-300'>
                        <td>4</td>
                        <td>Nguyễn Văn</td>
                        <td>A</td>
                        <td>15-01-2023</td>
                        <td>154</td>
                        <td>150.000 VND</td>
                        <td>Thanh toán không thành công</td>
                        <td><a href='#'> Edit</a></td>
                      </tr>
                      <tr className='*:py-3 *:px-4 *:border-b *:border-gray-300'>
                        <td>5</td>
                        <td>Nguyễn Văn</td>
                        <td>A</td>
                        <td>15-01-2023</td>
                        <td>155</td>
                        <td>150.000 VND</td>
                        <td>Thanh toán không thành công</td>
                        <td><a href='#'> Edit</a></td>
                      </tr>
                      <tr className='*:py-3 *:px-4 *:border-b *:border-gray-300'>
                        <td>6</td>
                        <td>Nguyễn Văn</td>
                        <td>A</td>
                        <td>15-01-2023</td>
                        <td>156</td>
                        <td>150.000 VND</td>
                        <td>Thanh toán không thành công</td>
                        <td><a href='#'> Edit</a></td>
                      </tr>
                      <tr className='*:py-3 *:px-4 *:border-b *:border-gray-300'>
                        <td>7</td>
                        <td>Nguyễn Văn</td>
                        <td>A</td>
                        <td>15-01-2023</td>
                        <td>157</td>
                        <td>150.000 VND</td>
                        <td>Thanh toán không thành công</td>
                        <td><a href='#'> Edit</a></td>
                      </tr>
                      <tr className='*:py-3 *:px-4 *:border-b *:border-gray-300'>
                        <td>8</td>
                        <td>Nguyễn Văn</td>
                        <td>A</td>
                        <td>15-01-2023</td>
                        <td>158</td>
                        <td>150.000 VND</td>
                        <td>Thanh toán không thành công</td>
                        <td><a href='#'> Edit</a></td>
                      </tr>
                      <tr className='*:py-3 *:px-4 *:border-b *:border-gray-300'>
                        <td>9</td>
                        <td>Nguyễn Văn</td>
                        <td>A</td>
                        <td>15-01-2023</td>
                        <td>159</td>
                        <td>150.000 VND</td>
                        <td>Thanh toán không thành công</td>
                        <td><a href='#'> Edit</a></td>
                      </tr>
                      <tr className='*:py-3 *:px-4 *:border-b *:border-gray-300'>
                        <td>10</td>
                        <td>Nguyễn Văn</td>
                        <td>A</td>
                        <td>15-01-2023</td>
                        <td>160</td>
                        <td>150.000 VND</td>
                        <td>Thanh toán không thành công</td>
                        <td><a href='#'> Edit</a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
  )
}

export default TableAdmin