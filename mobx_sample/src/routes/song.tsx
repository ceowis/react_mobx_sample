import { Form } from 'react-router-dom';
import '../App.css';
import { useEffect, useRef, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import SongModal from 'src/components/SongModal';

function song() {
  const [isCustomModalOpen, setIsCusomModalOpen] = useState(false);

  const openCustomModal = () => setIsCusomModalOpen(true);
  const closeCustomModal = () => setIsCusomModalOpen(false);

  const getCallback = (temp: any) => {
    // console.log(temp);
    alert(temp);
  };

  return (
    <div>
      <h1>Song page</h1>
      <br />
      <Button variant="contained" onClick={openCustomModal}>
        Open modal
      </Button>
      <SongModal
        isOpen={isCustomModalOpen}
        closeModal={closeCustomModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
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
      </SongModal>
    </div>
  );
}

export default song;
