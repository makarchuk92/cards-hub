import React from 'react'
import { useParams } from 'react-router'
import { useAppSelector } from '../../hooks/redux'
import { cardApi } from '../../services/CardService'




const CardDetails = () => {

  const { id } = useParams()
  const { data: posts } = cardApi.useGetCardsQuery()
  const {cards} = useAppSelector(state => state.cards)


  const cardId = posts?.find((card) => card.id === id)

  return (
    <div>
      {cardId ? (
        <React.Fragment>
          <h3>Date: {cardId.date}</h3>
          <p>{cardId.body}</p>
        </React.Fragment>
      ) : (
        <p>not found</p>)
      }
    </div>
  )
}

export default CardDetails