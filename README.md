# liquid-democracy

 * [Overview](#overview)
 * [Installation](#install)
 * [Contribute](#contributing)
 * [Articles and Research](#articles)

## Overview

liquid-democracy provides a backend for creating a 'liquid/proxy democracy voting' application. It interacts with the ncnt blockchain via their SDK.

### It provides:
- ability to propose a new proposition
- ability to vote for the proposition
- ability to delegate/proxy your vote
- ability to batch delegate/proxy votes based on tags
- ability to retreive votes you have access to
- login via identity service (ex: uport/civic/coinbase) that will be used for tags in addition to wallet

### Details:
#### [required] Each proposition should have
*  Description
* Number of votes (this should be the maximum)
* Minimum votes cast for completiton
* Expiry
* Public key for creator
* At least one tag (ex: Global, USA, San Carlos, MIT employee, MIT student etc.)

#### [optional] Each proposition can include
* Incentive to vote/proxy
* Incentives will work only if or or more [metric + oracle + time period] is included
* Incentives will only be distributed after the time period has elapsed
* Incentives will only be active if the minimum votes are cast for completion

### Example:
* Vote created to raise taxes to pay for more schools in San Carlos
* Incentive will be maximum .0001 eth distributed if school scores go up faster than the average of the pervious 5 years; as tracked by the sensus beurau. Checked again 1 year after the implementation.
#### If vote passes:
* One year later if the metric goes up, payout everyone that voted/proxied their vote for success .0001 eth
* One year later if the metric goes down, payout everyone that voted/proxied their vote for failure .0001 eth
#### If vote is rejected:
* One year later if the metric goes up, payout everyone that voted/proxied their vote for failure .0001 eth
* One year later if the metric goes down, payout everyone that voted/proxied their vote for success .0001 eth

Tech stack:
- Javascript, NodeJS, ExpressJS, Serverless, nCentSDK

## Install

1. Install it using npm:
  ```shell
  git clone git@github.com:lostcodingsomewhere/liquid-democracy.git
  cd liquid-democracy
  npm install serverless -g
  npm init -f
  npm install
  ```

2a. Update some code in src/controllers/create.js to point to your local ncentSDK:
  ```js
  const NcentSDK = require('../../../../../open-source/ncent.github.io/SDK/source/ncentSDK');
  ```

2b. Update some code in ncent.github.io/SDK/source/ncentSDK.js to use await/async over Promises
  ```js
  async stampToken(public_key, tokenName, numTokens, ExpiryDate, success, reject) {
      // Make a request for a user with a given ID
      try {
          let response = await axios.post(this._net + '/tokentypes', {
              sponsor_uuid: public_key,
              Name: tokenName,
              totalTokens: numTokens,
              ExpiryDate: ExpiryDate,          
          });
          return success(response);
      } catch(error) {
          return reject(error);
      }
  }
  ```

3a. Deploy locally:
  ```shell
  sls offline start
  ```

3a. Deploy remotely (must setup serverless framework and aws-cli setup with apikey/secret):
  ```shell
  sls login
  sls deploy -v
  ```

In the event the above does not work, please add an issue.

## Contributing
Feel free to create merge requests

## Articles
* [What is Liquid Democracy?](https://blog.united.vote/2016/09/21/what-is-liquid-democracy/)
* [Liquid Democracy: True Democracy for the 21st Century](https://medium.com/organizer-sandbox/liquid-democracy-true-democracy-for-the-21st-century-7c66f5e53b6f)
* [Google Votes: A Liquid Democracy Experiment
on a Corporate Social Network](https://www.tdcommons.org/cgi/viewcontent.cgi?article=1092&context=dpubs_series)
* [Blockchain, liquid democracy and the end of the outsider](https://words.democracy.earth/blockchain-liquid-democracy-and-the-end-of-the-outsider-a171a0e11816)
* [Helios: Web-based Open-Audit Voting](https://www.usenix.org/legacy/event/sec08/tech/full_papers/adida/adida.pdf)
* [An Information-Theoretic Model of Voting Systems](https://www.semanticscholar.org/paper/An-Information-Theoretic-Model-of-Voting-Systems-Hosp-Vora/24d55c866a7317dae11d37518b312ee460bc33d3)
* [A Mathematical Theory of Communication](http://math.harvard.edu/~ctm/home/text/others/shannon/entropy/entropy.pdf)
* [Quadratic Voting: How Mechanism Design Can Radicalize Democracy](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2003531)
* [DAOs, Democracy and Governance](http://merkle.com/papers/DAOdemocracyDraft.pdf)
* [Basic Income and Deepening Democracy](https://basicincome.org/bien/pdf/munich2012/Choi.pdf)

