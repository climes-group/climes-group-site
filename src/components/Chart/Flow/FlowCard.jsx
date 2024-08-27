import { Box, Button, Card, Divider, Stack, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { stepBackward, stepForward } from "../../../state/slices/flowReducer";

const FlowButtonsDiv = styled.div`
  margin: 2rem;
  > button {
    margin-left: 1em;
  }
`;

export default function FlowCard(props) {
  const dispatch = useDispatch();

  return (
    <Card variant="outlined" sx={{ maxWidth: 580 }}>
      <Box sx={{ p: 2 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography gutterBottom variant="h5" component="div">
            {props.step.title}
          </Typography>
        </Stack>
        <Typography color="text.secondary" variant="body2">
          {props.step.desc}
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>{props.children}</Box>
      <Divider />
      <FlowButtonsDiv>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => dispatch(stepForward())}
        >
          Next
        </Button>
        {props.step.prev !== null && (
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => dispatch(stepBackward())}
          >
            Previous
          </Button>
        )}
      </FlowButtonsDiv>
    </Card>
  );
}
