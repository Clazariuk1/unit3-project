// am I experiencing a forbidden error because I'm attempting to redeclare the run function with different contents/parameters? Do these need to be within the same function?

const mailchimp = require('@mailchimp/mailchimp_marketing')

mailchimp.setConfig({
    apiKey: '67197522d910906210e1eced030c7597-us13',
    server: 'us13',
})

const event = {
    name: 'Dev Dependency Newsletter'
}

const footerContactInfo = {
    company: 'Mailchimp',
    address1: '123 Fake Demo Street',
    city: 'San Francisco',
    state: 'CA',
    zip: '94122',
    country: 'US'
}

const campaignDefaults = {
    from_name: 'Monthly Newsletter',
    from_email: 'devdependency@demo.com',
    subject: 'Dev Dependency Monthly Newsletter',
    language: 'EN_US'
}

async function run() {
    const response = await mailchimp.lists.createList({
        name: event.name,
        contact: footerContactInfo,
        permission_reminder: 'permission_reminder',
        email_type_option: true,
        campaign_defaults: campaignDefaults
    })
    console.log(
        `Successfully created an audience. The audience ID is ${response.id}`
    )
}

const listId = 'YOUR_LIST_ID' // how do I pull this list ID from the above function???
const subscribingUser = {
    firstName: 'Prudence',
    lastName: 'McVankab',
    email: 'prudence.mcvankab@example.com'
}

async function run() {
    const response = await mailchimp.lists.addListMember(listId, {
        email_address: subscribingUser.email,
        status: 'subscribed',
        merge_fields: {
            FNAME: subscribingUser.firstName,
            LNAME: subscribingUser.lastName
        }
    })
    console.log(
        `Successfully added contact as an audience member. The contact's ID is ${response.id}.`
    )
}

const md5 = require('md5')

// const listId = 'YOUR_LIST_ID'
const email = 'prudence.mcvankab@example.com'
const subscriberHash = md5(email.toLowerCase())

async function run() {
    try {
        const response = await mailchimp.lists.getListMember(
            listId,
            subscriberHash
        )
        console.log(`This user's subscription status is ${response.status}.`)
    } catch (e) {
        if (e.status === 404) {
            console.error(`This email is not subscribed to this list.`, e)
        }
    }
}

async function run() {
    const response = await mailchimp.lists.updateListMember(
        listId,
        subscriberHash,
        {
            status: 'unsubscribed'
        }
    )
    console.log(`This user is now ${response.status}.`)
}

// Test Ping for debugging below
// async function run() {
//     const response = await mailchimp.ping.get()
//     console.log(response)
// }


run()
