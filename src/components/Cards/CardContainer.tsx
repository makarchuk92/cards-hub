import {  useAppSelector } from '../../hooks/redux';
import { cardApi } from '../../services/CardService';
import CardList from './CardList';
import FilterCards from './FilterCards';

const CardContainer = () => {
 
    const {data: cards,isLoading, error  } = cardApi.useGetTodosQuery()
    const {filter} = useAppSelector(state => state.cards)
   const filterCards = cards?.filter((card) => {
      if (filter === 'all') return !card.like
      if(filter === 'favorites') return card.like
    })

  return (
    <div className='card-wrapper'>

      <FilterCards filter={filter} />
    {filterCards?.map(card => 
      <CardList 
      key={card.id}
      isLike={card.like}
      title={card.title} body={card.body} avatar={card.avatar} id={card.id} card={card} />
    )}
    </div>
  )
}

export default CardContainer