// "use client";

// import { FormProvider, useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";

// import {
//   CheckoutSidebar,
//   Container,
//   Title,
//   CheckoutAddressForm,
//   CheckoutCart,
//   CheckoutPersonalForm,
// } from "@/shared/components";
// import { CheckoutFormValues, checkoutFormSchema } from "@/shared/constants";
// import { useCart } from "@/shared/hooks";
// import { createOrder } from "@/app/actions";
// import toast from "react-hot-toast";
// import React from "react";
// import { useSession } from "next-auth/react";
// import { Api } from "@/shared/services/api-client";

// export default function CheckoutPage() {
//   const [submitting, setSubmitting] = React.useState(false);
//   const { totalAmount, updateItemQuantity, items, removeCartItem, loading } =
//     useCart();
//   const { data: session } = useSession();

//   const form = useForm<CheckoutFormValues>({
//     resolver: zodResolver(checkoutFormSchema),
//     defaultValues: {
//       email: "",
//       firstName: "",
//       lastName: "",
//       phone: "",
//       address: "",
//       comment: "",
//     },
//   });

//   React.useEffect(() => {
//     async function fetchUserInfo() {
//       const data = await Api.auth.getMe();
//       const [firstName, lastName] = data.fullName.split(" ");

//       form.setValue("firstName", firstName);
//       form.setValue("lastName", lastName);
//       form.setValue("email", data.email);
//     }

//     if (session) {
//       fetchUserInfo();
//     }
//   }, [session]);

//   const onSubmit = async (data: CheckoutFormValues) => {
//     try {
//       setSubmitting(true);

//       const url = await createOrder(data);

//       toast.error("Заказ успешно оформлен! 📝 Переход на оплату... ", {
//         icon: "✅",
//       });

//       if (url) {
//         location.href = url;
//       }
//     } catch (err) {
//       console.log(err);
//       setSubmitting(false);
//       toast.error("Не удалось создать заказ", {
//         icon: "❌",
//       });
//     }
//   };

//   const onClickCountButton = (
//     id: number,
//     quantity: number,
//     type: "plus" | "minus"
//   ) => {
//     const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
//     updateItemQuantity(id, newQuantity);
//   };

//   return (
//     <Container className="mt-10">
//       <Title text="Checkout" className="font-extrabold mb-8 text-[36px]" />

//       <FormProvider {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)}>
//           <div className="flex gap-10">
//             {/* Левая часть */}
//             <div className="flex flex-col gap-10 flex-1 mb-20">
//               <CheckoutCart
//                 onClickCountButton={onClickCountButton}
//                 removeCartItem={removeCartItem}
//                 items={items}
//                 loading={loading}
//               />

//               <CheckoutPersonalForm
//                 className={loading ? "opacity-40 pointer-events-none" : ""}
//               />

//               <CheckoutAddressForm
//                 className={loading ? "opacity-40 pointer-events-none" : ""}
//               />
//             </div>

//             {/* Правая часть */}
//             <div className="w-[450px]">
//               <CheckoutSidebar
//                 totalAmount={totalAmount}
//                 loading={loading || submitting}
//               />
//             </div>
//           </div>
//         </form>
//       </FormProvider>
//     </Container>
//   );
// }

import {
  CheckoutItemDetails,
  Container,
  Title,
  WhiteBlock,
} from "@/shared/components/shared";
import { Button, Input, Textarea } from "@/shared/components/ui";
import { ArrowRight, Package, Percent, Truck } from "lucide-react";

export default function CheckoutPage() {
  return (
    <Container className="mt-10">
      <Title text="Checkout" className="font-extrabold mb-8 text-[36px]" />

      <div className="flex gap-10">
        <div className="flex flex-col gap-10 flex-1 mb-20">
          <WhiteBlock title="1. Cart">1234e21412452143</WhiteBlock>

          <WhiteBlock title="2. Personal Info">
            <Input name="firstName" className="text-base" placeholder="Name" />
            <Input
              name="lastName"
              className="text-base"
              placeholder="Last Name"
            />
            <Input name="email" className="text-base" placeholder="E-mail" />
            <Input name="phone" className="text-base" placeholder="Phone" />
          </WhiteBlock>

          <WhiteBlock title="2. Address">
            <div className="flex flex-col gap-5">
              <Input
                name="firstName"
                className="text-base"
                placeholder="Type address..."
              />
              <Textarea className="text-base" placeholder="Comment" rows={5} />
            </div>
          </WhiteBlock>

          <div className="w-[450px]">
            <WhiteBlock className="p-6 sticky top-4">
              <div className="flex flex-col gap-1">
                <span className="text-xl">Total:</span>
                <span className="text-4xl font-extrabold">3306</span>
              </div>

              <CheckoutItemDetails
                title={
                  <>
                    <Package size={14} className="mr-2 text-gray-400" />
                    Product price:
                  </>
                }
                value="150 $"
              />
              <CheckoutItemDetails
                title={
                  <>
                    <Percent size={14} className="mr-2 text-gray-400" />
                    Taxes:
                  </>
                }
                value="150 $"
              />
              <CheckoutItemDetails
                title={
                  <>
                    <Truck size={18} className="mr-2 text-gray-400" />
                    Delivery:
                  </>
                }
                value="150 $"
              />

              <Button
                type="submit"
                className="w-full h-14 rounded-2xl mt-6 text-base font-bold"
              >
                Checkout
                <ArrowRight className="w-5 ml-2" />
              </Button>
            </WhiteBlock>
          </div>
        </div>
      </div>
    </Container>
  );
}
