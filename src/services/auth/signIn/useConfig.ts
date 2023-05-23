import { InputType } from 'types/field';
import { FormInfo } from 'types/form';

export type ResponseProps = {
  login: {
    formInfo: FormInfo;
  };
};

const useConfig = (): { data: ResponseProps } => ({
  data: {
    login: {
      formInfo: {
        allowBack: true,
        description: '',
        extraButtons: [],
        inputList: [
          {
            id: '1',
            fieldName: 'username',
            input: InputType.TEXT,
            label: 'Tên đăng nhập',
            placeHolder: 'Tên đăng nhập',
            rulesList: [
              {
                rule: '^(?!\\s*$).+',
                label: 'Vui lòng nhập Tên đăng nhập',
              },
              // {
              //   rule: '[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}',
              //   label: 'Định dạng email không đúng, ví dụ abc@gmail.com',
              // },
            ],
            // value: 'lethanhphong1702',
          },
          {
            id: '2',
            fieldName: 'password',
            input: InputType.EMAIL,
            label: 'Mật khẩu',
            placeHolder: 'Mật khẩu',
            // value: '123456',
            rulesList: [
              {
                rule: '^(?!\\s*$).+',
                label: 'Vui lòng nhập Mật khẩu',
              },
            ],
          },
        ],
        requireDevice: false,
        suffixButtons: [],
        title: 'Đăng nhập',
      },
    },
  },
});

export default useConfig;
