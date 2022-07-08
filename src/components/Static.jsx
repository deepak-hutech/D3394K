import React from "react";

const Static = () => {
  return (
    <div>
      <section className="py-12 md:py-20 px-6 md:px-0 bg-white">
        <div className="m-auto max-w-default">
          <div className="text-center">
            <h2 className="md:text-5xl text-3xl text-gray-800 font-bold">
              {" "}
              FAQs
            </h2>
          </div>
          <div className="mt-10 md:mt-16">
            <div className="md:max-w-3xl m-auto">
              <details className="border-b-2">
                <summary className="p-4 text-gray-800 font-bold cursor-pointer pt-5 mb-1 text-lg focus:text-blue-700">
                  How do I login on ABC? I used to login with email,
                  Google/Facebook login.
                </summary>
                <p className="py-2 px-3 text-gray-600">
                  For older users of ABC who used to login with
                  email/Google/Facebook, enter your mobile number and OTP, then
                  choose your method of login under "Already have an account?".
                  Once you have entered the details, you will be logged in to
                  your account. Next time onwards, you can use your mobile and
                  OTP for easy login.
                </p>
              </details>
              <details className="border-b-2">
                <summary className="p-4 text-gray-800 font-bold cursor-pointer pt-5 mb-1 text-lg focus:text-blue-700">
                  Why am I asked for password after entering OTP while trying to
                  login?
                </summary>
                <p className="py-2 px-3 text-gray-600">
                  ABC's security policy sometimes requires you to enter your
                  password if you have not logged in with OTP for a very long
                  time. This is done to ensure that no one else can access your
                  account after you have discarded your mobile number and it is
                  assigned to someone else as per government policy.
                </p>
              </details>
              <details className="border-b-2">
                <summary className="p-4 text-gray-800 font-bold cursor-pointer pt-5 mb-1 text-lg focus:text-blue-700">
                  Can I still login with password on ABC?
                </summary>
                <p className="py-2 px-3 text-gray-600">
                  You can login with mobile number and password. This works if
                  your mobile number is verified on your account. To login with
                  mobile and password, enter your mobile number and "Continue".
                  On the OTP page, you will find the option to login with
                  password. However, it is highly recommended that you login
                  with OTP for convenience and security.
                </p>
              </details>
              <details className="border-b-2">
                <summary className="p-4 text-gray-800 font-bold cursor-pointer pt-5 mb-1 text-lg focus:text-blue-700">
                  What if I don't receive an OTP due to poor network
                  connectivity?
                </summary>
                <p className="py-2 px-3 text-gray-600">
                  If you are not receiving an OTP use the "Login with password"
                  option to login to your ABC account.
                </p>
              </details>
              <details className="border-b-2">
                <summary className="p-4 text-gray-800 font-bold cursor-pointer pt-5 mb-1 text-lg focus:text-blue-700">
                  What is an alternate mobile number? Why does ABC ask for it?
                </summary>
                <p className="py-2 px-3 text-gray-600">
                  Alternate Mobile Number is another mobile number that can be
                  used to gain access to your account if you loose your login
                  mobile number, for example if you lose your mobile or you just
                  decided to change your number. In such a case, you can enter
                  your login mobile number and alternate mobile number, the OTP
                  will be sent to the alternate mobile number and you will be
                  able to login to your account and change your password and
                  your login mobile number.
                </p>
              </details>
              <details className="border-b-2">
                <summary className="p-4 text-gray-800 font-bold cursor-pointer pt-5 mb-1 text-lg focus:text-blue-700">
                  Do I need to provide email to create an account on ABC?
                </summary>
                <p className="py-2 px-3 text-gray-600">
                  Providing an email is not mandatory to create an account on
                  ABC. However, we still recommend adding your email to your
                  account as it will allow you to easily reset your password if
                  you need to.
                </p>
              </details>
              <details className="border-b-2">
                <summary className="p-4 text-gray-800 font-bold cursor-pointer pt-5 mb-1 text-lg focus:text-blue-700">
                  What is account recovery on ABC?
                </summary>
                <p className="py-2 px-3 text-gray-600">
                  Providing an email is not mandatory to create an account on
                  ABC. However, we still recommend adding your email to your
                  account as it will allow you to easily reset your password if
                  you need to.
                </p>
              </details>
              <details className="border-b-2">
                <summary className="p-4 text-gray-800 font-bold cursor-pointer pt-5 mb-1 text-lg focus:text-blue-700">
                  Why am I asked for my credit card details to access my
                  account?
                </summary>
                <p className="py-2 px-3 text-gray-600">
                  In case you do not have your mobile number with you anymore,
                  ABC can use a saved credit/debit card detail from your
                  account, to match for expiry date and give you the option to
                  change your password and update your new mobile number in your
                  account. There is no charge made to the card in this process.
                  Alternatively, you can log in to your account with password if
                  you remember it and change the login mobile number from your
                  profile.
                </p>
              </details>
              <details className="border-b-2">
                <summary className="p-4 text-gray-800 font-bold cursor-pointer pt-5 mb-1 text-lg focus:text-blue-700">
                  What happens if my mobile number is given to someone else by
                  the telecom operator. Is my ABC account still safe?
                </summary>
                <p className="py-2 px-3 text-gray-600">
                  In case you do not have your mobile number with you anymore,
                  ABC can use a saved credit/debit card detail from your
                  account, to match for expiry date and give you the option to
                  change your password and update your new mobile number in your
                  account. There is no charge made to the card in this process.
                  Alternatively, you can log in to your account with password if
                  you remember it and change the login mobile number from your
                  profile.
                </p>
              </details>
              <details className="border-b-2">
                <summary className="p-4 text-gray-800 font-bold cursor-pointer pt-5 mb-1 text-lg focus:text-blue-700">
                  How can i change my mobile number that I use to login on ABC?
                </summary>
                <p className="py-2 px-3 text-gray-600">
                  In case you do not have your mobile number with you anymore,
                  ABC can use a saved credit/debit card detail from your
                  account, to match for expiry date and give you the option to
                  change your password and update your new mobile number in your
                  account. There is no charge made to the card in this process.
                  Alternatively, you can log in to your account with password if
                  you remember it and change the login mobile number from your
                  profile.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Static;
