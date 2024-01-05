import Modal from 'src/components/Modal.tsx';
import '../App.css';

import { useEffect, useRef, useState } from 'react';

function ModalSample() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} content="안녕하세요~ 홍길동님~" closeModal={closeModal} />
    </div>
  );
}

export default ModalSample;
