import React from "react";
import styled from "styled-components";

const AudioPlayer = ({ mp3, width }) => {
  return (
    <StyledAudioPlayer style={{ "--width": width }} controls>
      <source src={mp3} type="audio/mpeg" />
      Your browser does not support the audio tag.
    </StyledAudioPlayer>
  );
};

export default AudioPlayer;

const StyledAudioPlayer = styled.audio`
  margin-top: 2px;
  width: var(--width);
`;
