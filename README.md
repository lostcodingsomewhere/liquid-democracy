# liquid-democracy

 * [Overview](#overview)
 * [Contribute](#contributing)

## Overview

liquid-democracy provides a backend for creating a 'liquid/proxy democracy voting' application. It interacts with the ncnt blockchain via their SDK.

It provides:
- ability to propose a new proposition
- ability to vote for the proposition
- ability to delegate/proxy your vote
- ability to batch delegate/proxy votes based on tags
- ability to retreive votes you have access to

Details:
- [required] Each proposition should have
*  Description
* Number of votes (this should be the maximum)
* Minimum votes cast for completiton
* Expiry
* Public key for creator
* At least one tag (ex: Global, USA, San Carlos, MIT employee, MIT student etc.)

- [optional] Each proposition can include
* Incentive to vote/proxy
* Incentives will work only if or or more [metric + oracle + time period] is included
* Incentives will only be distributed after the time period has elapsed
* Incentives will only be active if the minimum votes are cast for completion

Example:
- Vote created to raise taxes to pay for more schools in San Carlos
- Incentive will be maximum .0001 eth distributed if school scores go up faster than the average of the pervious 5 years; as tracked by the sensus beurau. Checked again 1 year after the implementation.
- If vote passes:
* One year later if the metric goes up, payout everyone that voted/proxied their vote for success .0001 eth
* One year later if the metric goes down, payout everyone that voted/proxied their vote for failure .0001 eth
- If vote is rejected:
* One year later if the metric goes up, payout everyone that voted/proxied their vote for failure .0001 eth
* One year later if the metric goes down, payout everyone that voted/proxied their vote for success .0001 eth

## Contributing
Feel free to create merge requests
