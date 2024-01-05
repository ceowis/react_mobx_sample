import Modal from 'src/components/Modal.tsx';
import '../App.css';

import { useEffect, useRef, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import CustomModal from 'src/components/CustomModal';

function ModalSample() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCustomModalOpen, setIsCusomModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openCustomModal = () => setIsCusomModalOpen(true);
  const closeCustomModal = () => setIsCusomModalOpen(false);  
  const name = '홍길동';

  const getCallback = (temp: any) => {
    console.log(temp);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} content="안녕하세요~ 홍길동님~" closeModal={closeModal} />
       <p />
      <Button variant="contained" onClick={openCustomModal}>Open modal</Button>
      <CustomModal
        isOpen={isCustomModalOpen}
        closeModal={closeCustomModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        name={name}
        callback={getCallback}
      >
        <Box style={{ margin: '25%' }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          Modal Header
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Modal content
          </Typography>
        </Box>
      </CustomModal>
    </div>
  );
}

export default ModalSample;
