import React, {useState} from 'react'
import {
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'components'
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {Map} from 'immutable'
import MoonLoader from 'react-spinners/MoonLoader'

import ContactInfomation from './components/ContactInfomation'
import CreditCardInfo from './components/CreditCardInfo'
import ShippingAddress from './components/ShippingAddress'
import BillingAddress from './components/BilllingAddress'
import DetailInfoTable from './components/DetailInfoTable'
import {orderPaymentWatcher} from 'duck/watcher'

const OverPaid = () => (
  <Card type="border" className="mb-3 mt-3 rounded">
    <CardBody className="p-3">
      <CardBody className="border p-3 text-dark mb-3">
        Confirm Order and Choose shipping Method
      </CardBody>
    </CardBody>
  </Card>
)
const DetailPanel = ({
  billing_address,
  shipping_address,
  user,
  price_details,
  order_items,
  handlePlaceOrder,
}) => {
  const history = useHistory()

  const routeChange1 = () => {
    let path =
      '/order-center/create-new-order/shopping/viewcart/createperson/placeorder/transactions'
    history.push(path)
  }

  return (
    <Card className="mb-3">
      <CardBody>
        <Row>
          <Col lg={6}>
            <ContactInfomation user={user} />
            <CreditCardInfo />
          </Col>
          <Col lg={6}>
            <ShippingAddress address={billing_address} />
            <BillingAddress address={shipping_address} />
          </Col>
        </Row>
        <Row className="d-flex justify-content-center mb-3">
          <Button className="bg-success border-0">
            <i className="fa fa-plus mr-2"></i>
            Redeem Gift Card
          </Button>
        </Row>
        <DetailInfoTable price_details={price_details} order_items={order_items} />
        <Row className="d-flex justify-content-end mr-0 mb-1">
          <Button style={{width: 170}} className="bg-primary border-0">
            <i className="fa fa-exclamation-circle mr-1" aria-hidden="true"></i>
            Add Gift Message
          </Button>
        </Row>
        <Row className="d-flex justify-content-end mr-0 mb-1">
          <Button style={{width: 170}} className="bg-info border-0" onClick={routeChange1}>
            <i className="fa fa-floppy-o mr-1" aria-hidden="true"></i>
            <span>Save Order for Later</span>
          </Button>
        </Row>
        <Row className="d-flex justify-content-end mr-0 mb-1">
          <Button style={{width: 170}} className="bg-success border-0" onClick={handlePlaceOrder}>
            <i className="fa fas fa-check-circle mr-1"></i>
            <span> Place Your Order</span>
          </Button>
        </Row>
      </CardBody>
    </Card>
  )
}

DetailPanel.propTypes = {
  user: PropTypes.object,
  shipping_address: PropTypes.object,
  billing_address: PropTypes.object,
  price_details: PropTypes.object,
  order_items: PropTypes.array,
  handlePlaceOrder: PropTypes.func,
}

const PlaceOrder = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const toggle = () => setDropdownOpen((prevState) => !prevState)

  const history = useHistory()

  const user = props.cart.getIn(['user'], Map()).toJS()
  const orderDetails = props.order.getIn(['inProgressOrder'], Map()).toJS()

  if (props.process.get('isLoading')) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <MoonLoader size={75} color={'#de8b6d'} loading={true} />
      </div>
    )
  }

  if (Object.keys(orderDetails).length === 0) {
    return ''
  }

  const billing_address = orderDetails.data.billing_address
  const shipping_address = orderDetails.data.shipping_address
  const price_details = orderDetails.data.meta.display_price
  const order_items = orderDetails.included.items
  const itemCount = props.cart.get('itemCount')

  const handlePlaceOrder = () => {
    const payload = {
      data: {
        token: 'pm_card_visa',
      },
      token: props.user.get('token'),
      orderId: orderDetails.data.id,
    }
    props.orderPaymentWatcher(payload)
    let path = '/order-center/create-new-order/shopping/viewcart/createperson/placeorder/subtotal'
    history.push(path)
  }

  return (
    <React.Fragment>
      <Row>
        <Col className="d-flex justify-content-end">
          <Button className="rounded-0 bg-success border-0">
            <i className="fa fa-fw fa-shopping-cart"></i>
            {itemCount}
          </Button>
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle className="rounded-0 bg-success border-0" caret></DropdownToggle>
            <DropdownMenu style={{left: '-114px'}}>
              <DropdownItem divider />
              <DropdownItem header>
                <strong>Sub total:{orderDetails.data.meta.display_price.with_tax.formatted}</strong>
              </DropdownItem>
              <DropdownItem tag="h1">
                <Button className="rounded bg-primary border-0">View or Edit Cart</Button>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Col>
      </Row>
      <Row>
        <Col md={12} sm={12} xs={12}>
          <OverPaid />
          <DetailPanel
            billing_address={billing_address}
            shipping_address={shipping_address}
            price_details={price_details}
            order_items={order_items}
            user={user}
            handlePlaceOrder={handlePlaceOrder}
          />
        </Col>
      </Row>
    </React.Fragment>
  )
}

PlaceOrder.propTypes = {
  process: PropTypes.object,
  order: PropTypes.object,
  user: PropTypes.object,
  cart: PropTypes.object,
  orderPaymentWatcher: PropTypes.func,
}

const mapStateToProps = (state) => ({
  order: state.order,
  user: state.user,
  cart: state.cart,
  process: state.process,
})

const mapDispatchToProps = {orderPaymentWatcher}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceOrder)
