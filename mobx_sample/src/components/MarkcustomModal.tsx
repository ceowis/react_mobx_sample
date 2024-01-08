import React, { useState, ChangeEvent } from 'react';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

interface MarkcustomProp {
  isOpen: any;
  closeModal: any;
  children: any;
  name: any;
  callback: (temp: any) => void;
}

const MarkCustomModal = ({
  isOpen,
  closeModal,
  children,
  name,
  callback,
}: MarkcustomProp) => {
  const setData = () => {
    callback(idValue);
  };

  const setInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
  };

  const [idValue, setId] = useState<string>('');

  return (
    <Modal open={isOpen} onClose={closeModal}>
      <Paper
        elevation={2}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 800,
          maxWidth: '100%',
          maxHeight: '90%',
          overflowY: 'auto',
        }}
      >
        <Box style={{ margin: '25%' }}>
          <input name="input_text" value={idValue} onChange={setInputValue} />
          <Button variant="contained" onClick={setData}>
            입력
          </Button>
        </Box>
      </Paper>
    </Modal>
  );
};

export default MarkCustomModal;
