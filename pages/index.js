import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  background-color: #f5f5f5;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  text-align: center;
`;

export default function Home() {
  return (
    <Container>
      <Title>Welcome to Card News App</Title>
      <Subtitle>Your daily dose of news in card format</Subtitle>
    </Container>
  );
}
