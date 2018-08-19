const Parser = require('../helpers/request-parser');
const NcentSDK = require('../../../../../open-source/ncent.github.io/SDK/source/ncentSDK');
const NcentSdkInstance = new NcentSDK();

async function execute(req) {
  const proposal = Parser.parseProposalRequest(req);
  // TODO: in future check if they are logged into civic and valid for the proposal
  // make sure to include a success metric; and a function to check success (oracle)
  // need to add proposal information, description etc.
  if(!proposal.walletAddress) {
    let KeyPair = await NcentSdkInstance.createWalletAddress();
    proposal.walletAddress = KeyPair.publicKey();
  }

  let response = await NcentSdkInstance.stampToken(
    proposal.walletAddress, 
    proposal.tokenName, 
    proposal.numTokens, 
    proposal.ExpiryDate,
    function(success) { 
      console.log("Successfully created token: " + success);
      return success;
    },
    function(error) {
      console.log("There was an error: " + error);
      return error; 
    }
  );

  proposal.uuid = response.data.uuid;
  proposal.sponsor_uuid = response.data.sponsor_uuid;
  return proposal;
}

module.exports.execute = execute;
