import { Form } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import MarkCustomModal from 'src/components/MarkcustomModal';
import { Box, Button, Typography } from '@mui/material';

const Mark = () => {
  const [isCustomModalOpen, setIsCusomModalOpen] = useState(false);

  const openCustomModal = () => {
    setIsCusomModalOpen(true);

    const dataToSend = '원하는 데이터를 입력해주세요.'; // 원하는 데이터로 변경
    getCallback(dataToSend);
  };

  const closeCustomModal = () => setIsCusomModalOpen(false);
  const name = '홍길동';

  const getCallback = (temp: any) => {
    alert(temp);
  };

  return (
    <div>
      <Button variant="contained" onClick={openCustomModal}>
        데이터 입력
      </Button>
      <MarkCustomModal
        isOpen={isCustomModalOpen}
        closeModal={closeCustomModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        name={name}
        callback={getCallback}
      >
        <Box style={{ margin: '25%' }}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            내용 :
          </Typography>
        </Box>
      </MarkCustomModal>
    </div>
  );
};

export default Mark;
