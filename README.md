# Fabric Programming Exploration

Note to the reader - this README.md gives a high level summary, there are examples, candidate libraries and tools in this repo, each has there own README.md

Please add ideas, comments on major topics as issues in this repo.

PRs welcome

## This REPO

Contains

- Commercial-Paper
  - Standard scenaio example to show how the commcerical paper scenario could be realised
- Greeting
  - Very simple scenario showing the basics
- Shipping
  - A more complex example in terms of data structures

- Libraries
  - These are the the updates to the programming model, that are being proposed
  - `fabric-smart-contract` are additions that could be folded into the chaincode/contract packages
  - `fabric-application` are addtions that could be folded into the sdks
  - `fabric-data` projects is a new compoment, aspects of the data model that are currenty defined in the chaincode/sdk - will need to be made common.

** Conisder the libraries folder to contain what the Fabric Programming Model could looklike **  

- Tools
 - A prototype generator to be able to bi-directionally go between model and code.

- Definitions
  - defined structures of the data aspects

## 'Survey of the landscape'

We have defined today, the concept of Smart Contracts, each of contains 1 or more Transaction Functions. Each function, takes parameters, and returns a value, or errors. Within a given chaincode container, there can be one or more Smart Contracts defined.

*One chaincode container, with 1..m Smart Contracts, with 1..n transactions functions per Smart Contract*

The chaincode package is instantiate on a Fabric Channel, and this gives rise to the chaincode container.

On the client side, you construct a gateway object to indentifiy the 'Gateway Peer' to connect to. Once connected you obtain a reference to the network (aka Channel) - and then a reference to the Smart Contract of your choice.

From this, transactions can be 'evaluated' or 'submitted'. 

Within the Smart Contract, the logic can create, update or delete states in the world state, or other collections via the stub API.

## On different aspects of data

We need to separate out the following areas:

- How data is persisted within the world state - how is date passed to the raw 'putState' and retruned from the 'getState' APIs
  - This format has a restriction as today there is a view onto this data matained by CouchDB - and that expects data to be in JSON format. 
  - Using another format, impacts the choice of World State Database
  - Will call this the 'ledger protocol'

- The lowlevel APIs for the chaincode, and the client SDK work in terms of byte[].  
  - This information is transmitted, logically, beween the client and the chaincode, and needs to be marshalled to byte[]
  - Will call this the 'wire protocol'

*Wire Protocol* and *Ledger Protocol* do not necassariliy need to be the same.

Within the programming langauges, and the functional prototypes, there are definitions of complex and private objects.

## Specification of the Contract API

*Today*, the overall API and Datamodel of a set of Smart Contracts (that are deployed together to a chaincode code). Have a definition associated with them; this metadata defines the following.

- Overall information and metadata such as version, author etc of the set of contracts
- For each contract,
  - Indiviual name - used for namespacing if more than one contract
  - Default status (again if more than one)
  - List of transaction functions
    - Each function giving, it's name, types of the arguements, type of the return
    - (TODO: Add in the possible error cases)
- The privitive types can be given restrictions,
  - Numeric values can have ranges
  - Arrays can be bounded in size.
  - String values can be subject to regular expesssions
- A list of complex object definitions
  - Each definition contains the name of the definition and the structure
  - The struction is defined as a list of propeties (same format as arguments)
  - Optional and Mandatory status, and primitives can have the same restructions as above
  - other complex objects can be referred to or used as the basis - so providing single parent inheritence

### Where is this exposed today?

Today, this specification is obtained based upon the annotations/decorators within the code, or by conventions, (together with the option to augment from a user supplied flat form).

Primitative types can be decorated with markers for the additional restrictions.
Object classes can be decorated to determine the complex types.

This can be returned from the contract via a 'evaulateTransaction' on a defined 'system' name. As an example the VS Code extension will use this to construct it's tree view of transaction functions, and also create skelton FV Tests.

### Direction

In prority order...

- 1 To provide a ledger API similar to the approach taken within the samples of state and statelist
- 2 Document the the plug points and manner of custom serialization and validation
- 3 Events and Transient Data - pull in feedback from field discussions
- 4 Data Model - definition
- 5 To provide tooling to permit the object model definition to be converted into other formats and code



