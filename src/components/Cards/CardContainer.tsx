import {  useAppSelector } from '../../hooks/redux';
import { cardApi } from '../../services/CardService';
import CardList from './CardList';
import FilterCards from './FilterCards';
import { useState } from 'react';
import { SearchButton } from './SearchButton';



const CardContainer = () => {
  const [searchTerm, setSearchTerm] = useState('')
    const {data: cards, isLoading, isError  } = cardApi.useGetCardsQuery()
    const {filter} = useAppSelector(state => state.cards)
   const filterCards = cards?.filter((card) => {
      if (filter === 'all') return !card.like
      if(filter === 'favorites') return card.like
     
    }).filter(card => {
      return card.title.toLowerCase().replace(/\s/g, '').includes(searchTerm.toLowerCase().replace(/\s/g, ''))
    })


   


      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }
  if (isLoading) return <h1>...Loading</h1>
  if (isError) return <div>An error has occurred!</div>

  return (
    <div>
      <SearchButton searchTerm={searchTerm} handleChange={handleChange}  />
    <div className='card-wrapper'>
      <FilterCards />
    { 
      filterCards?.map(card => 
        <CardList 
        key={card.id}
        isLike={card.like}
        title={card.title} body={card.body} avatar={card.avatar} id={card.id} card={card} />
      )}
    </div>
    </div>
  )
}

export default CardContainer
