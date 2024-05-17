const { expect } = require('chai');
const { ethers } = require('hardhat');

const tokens = (n) => {
    return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe('Escrow', () => {
    let buyers, seller, inspector, lender, realEstate, escrow

    beforeEach(async () => {
        [buyers, seller, inspector, lender] = await ethers.getSigners()

        //deploy
        const RealEstate = await ethers.getContractFactory('RealEstate')
        realEstate = await RealEstate.deploy()

        //mint pelo vendedor
        let transaction = await realEstate.connect(seller).mint("https://ipfs.io/ipfs/QmQVcpsjrA6cr1iJjZAodYwmPekYgbnXGo4DFubJiLc2EB/1.json")

        await transaction.wait()

        const Escrow = await ethers.getContractFactory('Escrow')
        escrow = await Escrow.deploy(
            realEstate.address,
            seller.address,
            inspector.address,
            lender.address
        )
    })

    describe('Deployment', () => {
        it('returns the NFT address', async () => {
            const result = await escrow.nftAddress()
            expect(result).to.be.equal(realEstate.address)
        })
        it('returns the Seller address', async () => {
            let result = await escrow.seller()
            expect(result).to.be.equal(seller.address)
        })

        it('returns the Lender address', async () => {
            let result = await escrow.lender()
            expect(result).to.be.equal(lender.address)
        })

        it('returns the Inspector address', async () => {
            let result = await escrow.inspector()
            expect(result).to.be.equal(inspector.address)
        })
    })

})
