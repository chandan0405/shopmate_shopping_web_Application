import { Link, useLocation } from 'react-router-dom'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import Badge from '@mui/material/Badge'
import { useSelector } from 'react-redux'

export default function Navbar () {
  let loco = useLocation()
  const data = useSelector((state) => state.cartItems)

  return (
    <div className=''>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark py-3 shadow-sm'>
        <div className='container'>
          <Link className='navbar-brand fw-bold text-light' to='/'> Shopmate
          </Link>
          <div className='d-flex justify-content-between align-items-center'>
            <div className='d-flex me-lg-4'>
              <Link className={`${loco.pathname === "/cart" ? "text-danger active" : "text-light"} fw-bold me-4`} to='/cart'>
              <Badge badgeContent={data.carts.length} color='primary'>
                <ShoppingBagIcon fontSize='large' />
              </Badge>
              </Link>
            </div>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon'></span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}
