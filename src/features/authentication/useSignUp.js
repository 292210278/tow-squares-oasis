import { signUp as signUpApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

export default function useSignUp() {
  const { mutate: signUp, isLoading } = useMutation({
    mutationFn: signUpApi,

    onSuccess: (user) => {
      toast.success(
        "Account successfully created! Please verify the bew account from you user's email address."
      );
    },
  });
  return { signUp, isLoading };
}
