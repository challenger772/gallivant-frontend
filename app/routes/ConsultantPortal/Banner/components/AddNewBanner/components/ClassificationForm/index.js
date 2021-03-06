import React, {useState, useRef} from 'react'
import {CustomInput} from 'components'
import JoditEditor from 'jodit-react'
import {Col, Label, Input, InputGroupAddon, InputGroup, FormGroup, Row} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  title: {
    fontSize: '32px',
    color: '#403839',
    fontFamily: 'DINCondensed-Bold',
  },
  name: {
    fontSize: '12px',
    color: '#403839',
    fontFamily: 'SFUIText-Bold',
    marginRight: 15,
  },
  nameStyle: {
    fontSize: '12px',
    color: '#403839',
    fontFamily: 'SFUIText-Bold',
    marginLeft: 19,
  },
  value: {
    color: '#6c6766',
    fontSize: 14,
    fontFamily: 'SFUIText-Medium',
  },
  font: {
    color: '#adaaaa',
    fontSize: 14,
    fontFamily: 'SFUIText-Medium',
  },
  label: {
    color: '#de8b6d',
    fontSize: 14,
    fontFamily: 'SFUIText-Semibold',
  },
  check: {
    color: '#403839',
    fontSize: 21,
    fontFamily: 'DINCondensed-Bold',
    marginLeft: '7px',
  },
  subcheck: {
    color: '#403839',
    fontSize: 14,
    fontFamily: 'SFUIText-Semibold',
  },
  subtitle: {
    fontFamily: 'DINCondensed-Bold',
    fontSize: 22,
    color: '#403839',
    marginTop: 25,
    marginLeft: 26,
  },
  border: {
    borderRadius: 4,
    marginRight: 26,
    marginLeft: 26,
  },
  size: {
    height: '300px',
  },
  groupStyle: {
    marginLeft: 162,
  },
})
const ClassificationForm = () => {
  const classes = useStyles()
  const config = {
    readonly: false,
  }
  const editor = useRef(null)
  const [content, setContent] = useState('')
  const [count, setCount] = useState(0)
  return (
    <Col className="mt-3">
      <Row form>
        <Col md={{size: 4, offset: 2}}>
          <FormGroup className="mr-md-5 mt-3">
            <Label className={classes.name}>Title</Label>
            <Input />
          </FormGroup>
        </Col>
        <Col md={{size: 4}}>
          <FormGroup className="mt-3">
            <Label className={classes.name}>Location</Label>
            <Input className={classes.font} type="select">
              <option>Top</option>
            </Input>
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={{size: 4, offset: 2}} xl={{size: 4, offset: 2}}>
          <Label for="order" className={classes.nameStyle}>
            Display Order
          </Label>
          <InputGroup>
            <InputGroupAddon
              className="pointer"
              addonType="prepend"
              onClick={() => setCount(count - 1)}>
              -
            </InputGroupAddon>
            <Input
              placeholder="Amount"
              type="text"
              value={count}
              readOnly
              className="text-center"
            />
            <InputGroupAddon
              className="pointer"
              addonType="append"
              onClick={() => setCount(count + 1)}>
              +
            </InputGroupAddon>
          </InputGroup>
        </Col>
        <Col md={{size: 7}} lg={8}></Col>
      </Row>
      <Row form>
        <Col md={{size: 8, offset: 2}} className="mt-3">
          <FormGroup>
            <Label className={classes.name}>Type</Label>
            <Input className={classes.value} type="select">
              <option>HTML</option>
            </Input>
          </FormGroup>
        </Col>
      </Row>
      <Row form className="mb-4 mt-4">
        <Col md={{size: 8, offset: 2}}>
          <JoditEditor
            ref={editor}
            value={content}
            config={config}
            tabIndex={1}
            onBlur={(newContent) => setContent(newContent)}
          />
        </Col>
      </Row>
      <Row form className="mt-5">
        <Col md={{size: 4, offset: 2}}>
          <FormGroup className="mr-md-5 mt-1">
            <Label className={classes.name}>Link To</Label>
            <Input className={classes.value} type="select">
              <option>Announcement Page</option>
            </Input>
          </FormGroup>
        </Col>
        <Col md={{size: 4}}>
          <FormGroup className="mt-1">
            <Label className={classes.name}>Link Target</Label>
            <Input className={classes.value} type="select">
              <option>New Tab / Window</option>
            </Input>
          </FormGroup>
        </Col>
      </Row>
      <Row form className="mb-4">
        <Col md={{size: 8, offset: 2}}>
          <JoditEditor
            ref={editor}
            value={content}
            config={config}
            tabIndex={1}
            onBlur={(newContent) => setContent(newContent)}
          />
        </Col>
      </Row>
      <Row form className="mt-5 mb-5">
        <Col md={{size: 1, offset: 2}} className="mr-5">
          <CustomInput type="checkbox" id="enabled" label="Enabled" className={classes.label} />
        </Col>
        <Col md={{size: 4}}>
          <CustomInput
            type="checkbox"
            id="display"
            label="Display On All Pages"
            className={classes.label}
          />
        </Col>
      </Row>
    </Col>
  )
}

export default ClassificationForm
