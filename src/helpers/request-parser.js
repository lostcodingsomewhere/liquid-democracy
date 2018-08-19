function parseProposalRequest(req) {
  const proposal = {
    walletAddress: req.body.walletAddress,
    tokenName: req.body.tokenName,
    numTokens: req.body.numTokens,
    ExpiryDate: req.body.ExpiryDate
  }
  return proposal;
}

function parseVoteRequest(req) {
  const vote = {
    address: req.body.address,
    tokenAddress: req.body.tokenAddress,
    delegateAddress: req.body.delegateAddress,
    vote: req.body.vote
  }
  return vote;
}

module.exports.parseProposalRequest = parseProposalRequest;
module.exports.parseVoteRequest = parseVoteRequest;
