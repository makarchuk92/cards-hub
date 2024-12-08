import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import { cardApi } from '../../services/CardService';
import { IPost } from '../../models/models';
import { useNavigate } from 'react-router';
import { Button } from '@mui/material';



export type PropsType = {
  title: string
  body: string
  avatar: string | undefined
  id: string | undefined
  card: IPost
  isLike: boolean
}

const CardList = (props: PropsType) => {
  const [deleteTodo, { }] = cardApi.useDeleteCardMutation()
  const [toggleLike, { }] = cardApi.useToggleLikeMutation()
  const [updateCard, {}] = cardApi.useUpdateCardMutation()
  const navigation = useNavigate()
  
  
  const handleLike = (post: IPost) => {
    toggleLike({ id: post.id, like: !post.like })
  }

  const handleRemoveCard = (card: IPost) => {
    deleteTodo(card)
  }

  const handleClickDetails = (id: string) => {
    navigation(`/products/${id}`)
  }

  const handleUpdateCard = () => {
    const body = prompt() || ''
    if(body) {
      updateCard({...props.card, body})
    }
    
  }
  

  return (
    <div onClick={() => handleClickDetails(props.card.id)}>
      <Card
        sx={{
          maxWidth: 345,
        }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              <img src={props.avatar} alt="" />
            </Avatar>
          }
          title=<h3>{props.title}</h3>
        />
        <CardContent>
          <Typography
            variant="body2" sx={{ color: 'text.secondary' }}
            onDoubleClick={() => console.log('click')}
          >
             
            <Button
            className="btn"
            variant="outlined"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {e.stopPropagation(); handleUpdateCard()}}
            color="primary"
            size="small"
          >
            Edit
          </Button>
           
              {props.body}
          
            
          </Typography>
        </CardContent>
        <CardActions disableSpacing className='action-buttons'>
          <IconButton aria-label="add to favorites"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) =>  {e.stopPropagation(); handleLike(props.card)}}>
            <FavoriteIcon style={{ color: props.isLike ? 'red' : 'black' }} />
          </IconButton>
          <IconButton
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {e.stopPropagation(); handleRemoveCard(props.card)}}
            aria-label="delete"
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
        </CardActions>
      </Card>
    </div>

  );
}

export default CardList