function solution(participant, completion) {
  const sortParticipant = participant.sort();
  const sortCompletion = completion.sort();
  for (let i = 0; i < sortParticipant.length; i++) {
    if (sortParticipant[i] !== sortCompletion[i]) {
      return sortParticipant[i];
    }
  }
}
