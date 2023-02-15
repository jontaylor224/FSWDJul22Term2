import React from 'react'
import { Card } from 'react-bootstrap'

const HeroSummary = ({ hero: { _id, name, alias } }) => {
  return (
    <Card>
      <Card.Title>{name}</Card.Title>
      <Card.Text>{alias === "N/A" ? "???" : `a.k.a ${alias}`}</Card.Text>
    </Card>
  )
}

export default HeroSummary