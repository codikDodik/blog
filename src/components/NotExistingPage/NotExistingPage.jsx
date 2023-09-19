import React from 'react'
import { Alert } from 'antd'

import classes from './NotExistingPage.module.scss'

const NotExistingPage = () => {
  return <Alert className={classes['alert']} message="Not Existing Page" type="error" />
}

export { NotExistingPage }
