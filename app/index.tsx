import { Redirect } from 'expo-router';

export default function Index() {
  // Этот файл просто перенаправляет пользователя на ваши вкладки
  return <Redirect href="/(tabs)" />;
}
