import { Button, TextField } from '@mui/material'
import React, { ChangeEvent, useState } from 'react'
import { IPost } from '../models/models';
import { cardApi } from '../services/CardService';


const CardForm = () => {
    const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [addPost, {}] = cardApi.useAddTodoMutation()
   

  const addNewCard = async() => {
    if(inputValue.trim()) {
      await addPost({title: inputValue} as IPost)
      setInputValue('')
    } else {
      setError('Field is required')
    }
     
  }

  const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setError(null);
  };
  return (
    <div className='card-form'>
          <TextField
        value={inputValue}
        onChange={onChangeInputHandler}
        id="standard-helperText"
        label="enter title"
        variant="standard"
        error={!!error}
        helperText={error}
      />
      <Button
        className="btn"
        variant="contained"
        onClick={addNewCard}
        color="primary"
        size="small"
      >
        Add
      </Button>
    </div>
  )
}

export default CardForm